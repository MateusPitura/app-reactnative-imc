import React, {useState} from 'react';
import {TouchableHighlight, SafeAreaView, ScrollView, TextInput, View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ScreenStyle from '../style/screen';
import TabStyle from '../style/tab-navigator'

export default function(){
    
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("")

    return(
        <SafeAreaView style={ScreenStyle.screenLayout}>
            <ScrollView>
                <View style={ScreenStyle.viewLayout}>
                    <Text style={ScreenStyle.screenText}>
                        Informe seu peso em kilogramas
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
                        onPress={()=>{setPeso("20")}}
                        style={[ScreenStyle.screenTouchable, TabStyle.itenShadow]}
                        underlayColor="#1C3C9D"
                    >
                        <Text style={ScreenStyle.touchableText}>
                            CALCULAR IMC
                        </Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}