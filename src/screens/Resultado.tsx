import React, {useState} from 'react';
import {Modal, SafeAreaView, View, ScrollView, Text, TouchableHighlight} from 'react-native';
import StyleModal from '../style/modal';
import TabStyle from '../style/tab-navigator'

export default function(props: any){
    return(
        <Modal
            visible={props.visible}
            transparent={true}
            animationType='slide'
        >
            <SafeAreaView style={StyleModal.displayView}>
                <View style={StyleModal.displayScroll}>
                    <ScrollView style={StyleModal.displayText}>
                        <View style={[StyleModal.scrollContent]}>
                            <Text style={StyleModal.titleText}>Resultado{'\n'}</Text>
                            <Text style={StyleModal.resultadoValue}>{props.imc}{'\n'}</Text>
                            <Text style={StyleModal.resultadoText}>Sua faixa de peso ideal é entre {props.pesoMinimo.toFixed(2)} kg e {props.pesoMaximo.toFixed(2)} kg{'\n'}</Text>
                            <Text style={StyleModal.resultadoText}>{props.pesoDiferenca}{'\n'}</Text>
                        </View>
                    </ScrollView>
                    <View style={StyleModal.layoutTouchable}>
                        <TouchableHighlight
                            onPress={()=>{
                                props.change(!props.visible);
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
    )
}