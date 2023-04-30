import React, {useState} from 'react';
import {TouchableHighlight, SafeAreaView, ScrollView, TextInput, View, Text, Modal, Alert, RefreshControl} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ScreenStyle from '../style/screen';
import TabStyle from '../style/tab-navigator'
import StyleModal from '../style/modal';

export default function(){
    
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("")
    const [imc, setImc] = useState(NaN);
    const [showModal, setShowModal] = useState(false);
    const [pesoMinimo, setPesoMinimo] = useState(NaN);
    const [pesoMaximo, setPesoMaximo] = useState(NaN);
    const [pesoDiferenca, setPesoDiferenca] = useState("");

    const calcularImc = () => {
        const valuePeso = parseFloat(peso);
        const valueAltura = parseFloat(altura);
        setImc(valuePeso/(valueAltura*valueAltura));
    }

    const definirLimitesPesos = () => {
        const valueAltura = parseFloat(altura);
        setPesoMinimo(18.5*(valueAltura*valueAltura));                                                                                                                                                                                                          
        setPesoMaximo(24.9*(valueAltura*valueAltura));
    }

    const definirDiferencaPeso = () => {
        const valuePeso = parseFloat(peso);
        if(imc<18.5){
            setPesoDiferenca("Você precisa ganhar " + (pesoMinimo-valuePeso).toFixed(2) + " kg");
        } else if(imc<24.9){
            setPesoDiferenca("Você está no peso ideal");
        } else{
            setPesoDiferenca("Você precisa perder " + (valuePeso-pesoMaximo).toFixed(2) + " kg");
        }
    }

    const mudarVisibilidade = () => {
        setShowModal(!showModal);
    }

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
                        //blurOnSubmit={false}
                    />
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
                            onPress={(isChecked: boolean) => {}} 
                        />
                    </View>
                    <TouchableHighlight
                        onPress={()=>{
                            calcularImc();
                            if(isNaN(imc)){
                                Alert.alert("Insira os valores");
                                return;
                            }
                            definirDiferencaPeso();
                            definirLimitesPesos();
                            mudarVisibilidade();
                        }}
                        style={[ScreenStyle.screenTouchable, TabStyle.itenShadow]}
                        underlayColor="#1C3C9D"
                    >
                        <Text style={ScreenStyle.touchableText}>
                            CALCULAR IMC
                        </Text>
                    </TouchableHighlight>
                    <Modal
                        visible={showModal}
                        transparent={true}
                        animationType='slide'
                    >
                        <SafeAreaView style={StyleModal.displayView}>
                            <View style={StyleModal.displayScroll}>
                                <ScrollView style={StyleModal.displayText}>
                                    <View style={[StyleModal.scrollContent]}>
                                        <Text style={StyleModal.titleText}>Resultado{'\n'}</Text>
                                        <Text style={StyleModal.resultadoValue}>{imc.toFixed(2)}{'\n'}</Text>
                                        <Text style={StyleModal.resultadoText}>Sua faixa de peso ideal é entre {pesoMinimo.toFixed(2)} kg e {pesoMaximo.toFixed(2)} kg{'\n'}</Text>
                                        <Text style={StyleModal.resultadoText}>{pesoDiferenca}{'\n'}</Text>
                                    </View>
                                </ScrollView>
                                <View style={StyleModal.layoutTouchable}>
                                    <TouchableHighlight
                                        onPress={()=>{
                                            mudarVisibilidade();
                                        }}
                                        style={[StyleModal.screenTouchable, TabStyle.itenShadow]}
                                        underlayColor="#1C3C9D"
                                    >
                                        <Text style={StyleModal.touchableText}>OK</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </SafeAreaView>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}