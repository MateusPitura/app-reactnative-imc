import React, {useState, useCallback, useEffect} from 'react';
import {TouchableHighlight, SafeAreaView, ScrollView, TextInput, View, Text, Button} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ScreenStyle from '../style/screen';
import TabStyle from '../style/tab-navigator'
import Resultado from './Resultado'

import AsyncStorage from '@react-native-community/async-storage'
import Uuid from 'react-native-uuid'
import Moment from 'moment';

export default function(){
    
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("")
    const [imc, setImc] = useState(NaN);
    const [showModal, setShowModal] = useState(false);
    const [pesoMinimo, setPesoMinimo] = useState(NaN);
    const [pesoMaximo, setPesoMaximo] = useState(NaN);
    const [pesoDiferenca, setPesoDiferenca] = useState("");
    const [textoPesoIsVisible, setTextoPesoIsVisible] = useState("none");
    const [incluirNoHistorico, setIncluirNoHistorico] = useState(false);

    const calcularImc = useCallback(() => {
        const valuePeso = parseFloat(peso);
        const valueAltura = parseFloat(altura);
        setImc(parseFloat((valuePeso/(valueAltura*valueAltura)).toFixed(2)));
    }, [peso, altura]);

    const definirLimitesPesos = useCallback(() => {
        const valueAltura = parseFloat(altura);
        setPesoMinimo((18.5*(valueAltura*valueAltura)));
        setPesoMaximo((24.9*(valueAltura*valueAltura)));
    }, [altura]);

    const definirDiferencaPeso = useCallback(() => {
        const valuePeso = parseFloat(peso);
        if(imc<18.5){
            setPesoDiferenca("Você precisa ganhar " + (pesoMinimo-valuePeso).toFixed(2) + " kg");
        } else if(imc<24.9){
            setPesoDiferenca("Você está no peso ideal");
        } else{
            setPesoDiferenca("Você precisa perder " + (valuePeso-pesoMaximo).toFixed(2) + " kg");
        }
    }, [imc]);

    const apagar = async () => {
        try{
            await AsyncStorage.removeItem("@meuimc:calculos");
            const response = await AsyncStorage.getItem("@meuimc:calculos");
        } catch(error){
            console.log(error);
        }
    }

    const handleArmazenar = useCallback(async ()=>{
        const valuePeso = parseFloat(peso);
        const valueAltura = parseFloat(altura);
        if(isNaN(valuePeso) || isNaN(valueAltura)){
            setTextoPesoIsVisible("flex");
            return;
        }
        if(!incluirNoHistorico){
            return;
        }
        try{
            const id = Uuid.v4();
            const date =  Moment().utcOffset('-03:00').format('DD/MM/YYYY');

            const newData = [{
                id,
                date,
                peso,
                imc
            }]

            const response = await AsyncStorage.getItem("@meuimc:calculos");
            const previousData = response? JSON.parse(response) : [];
            const data = [...newData, ...previousData];
            await AsyncStorage.setItem("@meuimc:calculos", JSON.stringify(data)); 
        } catch(error){
            console.log(error);
        }
    }, [imc, peso, altura, incluirNoHistorico])

    const mudarVisibilidade = () => {
        const valuePeso = parseFloat(peso);
        const valueAltura = parseFloat(altura);
        if(isNaN(valuePeso) || isNaN(valueAltura)){
            setTextoPesoIsVisible("flex");
            return;
        }
        setTextoPesoIsVisible("none");
        setShowModal(!showModal);
    };

    useEffect(()=>{
        definirDiferencaPeso();
        handleArmazenar();
    }, [imc])
    
    return(
        <SafeAreaView style={ScreenStyle.screenLayout}>
            <ScrollView>
                <View style={ScreenStyle.viewLayout}>
                    <Text style={ScreenStyle.screenText}>
                        Informe seu peso em quilogramas
                    </Text>
                    <TextInput
                        style={ScreenStyle.screenInput}
                        value={peso}
                        onChangeText={text=>setPeso(text)}
                        placeholder='63,5'
                        cursorColor='#2854F1'
                        returnKeyType="next"
                        inputMode="numeric"
                        maxLength={6}
                        onSubmitEditing={()=>{this.secondTextInput.focus()}}
                        blurOnSubmit={false}
                    />
                    <Text style={{display: textoPesoIsVisible}}>Preencha esse campo</Text>
                    <Text style={ScreenStyle.screenText}>
                        Informe sua altura em metros
                    </Text>
                    <TextInput
                        style={ScreenStyle.screenInput}
                        value={altura}
                        onChangeText={text=>setAltura(text)}
                        placeholder='1,62'
                        cursorColor='#2854F1'
                        inputMode="numeric"
                        maxLength={4}
                        ref={(input)=>{this.secondTextInput = input}}
                    />
                    <View style={ScreenStyle.checkboxLayout}>
                        <BouncyCheckbox 
                            size={25}
                            fillColor='#2854F1'
                            unfillColor='#fff'
                            text="Selecione para incluir no seu histórico"
                            textStyle={{
                                textDecorationLine: 'none',
                            }}
                            iconStyle={{
                                borderRadius: 5,
                            }}
                            innerIconStyle={{
                                borderRadius: 5,
                            }}
                            onPress={(isChecked: boolean) => {setIncluirNoHistorico(isChecked)}} 
                        />
                    </View>
                    <TouchableHighlight
                        onPress={()=>{
                            calcularImc();
                            definirLimitesPesos();
                            definirDiferencaPeso();
                            handleArmazenar();
                            mudarVisibilidade();
                        }}
                        style={[ScreenStyle.screenTouchable, TabStyle.itenShadow]}
                        underlayColor="#1C3C9D"
                    >
                        <Text style={ScreenStyle.touchableText}>
                            CALCULAR IMC
                        </Text>
                    </TouchableHighlight>
                    <Resultado 
                        visible={showModal} 
                        change={setShowModal} 
                        imc={imc} 
                        pesoDiferenca={pesoDiferenca} 
                        pesoMinimo={pesoMinimo} 
                        pesoMaximo={pesoMaximo}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}