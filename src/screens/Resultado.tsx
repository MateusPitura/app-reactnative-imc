import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableHighlight, View, Text, Modal} from 'react-native';
import StyleModal from '../style/modal';
import ScreenStyle from '../style/screen'
import TabStyle from '../style/tab-navigator'

export default function(props: any){

    //const [showModal, setShowModal] = useState(props.visible);

    return(
        <Modal
            visible={props.visible}
            transparent={true}
            animationType='slide'
        >
            <View style={StyleModal.background}>
                <SafeAreaView style={StyleModal.viewLayout}>
                    <ScrollView style={StyleModal.displayScroll}>
                        <View style={StyleModal.displayText}>
                            <Text style={StyleModal.titleText}>Resultado{'\n'}</Text>
                            <Text style={StyleModal.resultadoValue}>17.5{'\n'}</Text>
                            <Text style={StyleModal.resultadoText}>Você está abaixo do peso{'\n'}</Text>
                            <Text style={StyleModal.resultadoText}>Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5Sua faixa de peso ideal é entre 18 e 20.5{'\n'}</Text>
                            <Text style={StyleModal.resultadoText}>Você precisa ganhar 8.5 kilos{'\n'}</Text>
                            <TouchableHighlight
                                //onPress={}
                                style={[ScreenStyle.screenTouchable, TabStyle.itenShadow, StyleModal.buttonDisplay]}
                                underlayColor="#1C3C9D"
                            >
                                <Text style={ScreenStyle.touchableText}>OK</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
            
        </Modal>
    )
}