import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TextInput, View, Text} from 'react-native';
import ScreenStyle from '../style/screen';


export default function(){
    
    const [peso, setPeso] = useState("63,5");
    const [altura, setAltura] = useState("1,62")

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
                        defaultValue='50,6'
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
                        cursorColor='#2854F1'
                        inputMode="numeric"
                        maxLength={4}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}