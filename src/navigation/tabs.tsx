import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Sobre from '../screens/Sobre';
import Calculadora from '../screens/Calculadora';
import Historico from '../screens/Historico';

import TabStyle from '../style/tab-navigator';

import IconInformacoes from '../assets/icons/informacoes.svg'
import IconCalculadora from '../assets/icons/calculadora.svg'
import IconEstatisticas from '../assets/icons/estatisticas.svg'

const Tab = createBottomTabNavigator();

const TabBarButton = ({children, onPress}: any) => {
    return(
        <TouchableHighlight
            style={[TabStyle.highlightBottom, TabStyle.itenShadow]}
            onPress={onPress}
        >
            <View style={TabStyle.tabButton}>
                {children}
            </View>
        </TouchableHighlight>
    )
}

export default function(){ 
  return(
    <Tab.Navigator 
        initialRouteName='Calculadora'
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: [TabStyle.tabBox, TabStyle.itenShadow],
        }}
    >
        <Tab.Screen
            name='Sobre'
            component={Sobre}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={TabStyle.tabDiv}>
                        <IconInformacoes fill={focused?'#2854F1':'#748C94'} width={25} height={25}/>
                        <Text style={[TabStyle.tabText, focused && TabStyle.colorFocused]}>
                            SOBRE
                        </Text>
                    </View>
                ),
                headerShown: false
            }}
        />
        <Tab.Screen
            name='Calculadora'
            component={Calculadora}
            options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <IconCalculadora fill='#fff' width={40} height={40}/>
                    </View>
                ),
                tabBarButton: (props) => (
                    <TabBarButton {...props}/>
                ),
                headerShown: false
            }}
        />
        <Tab.Screen
            name='Historico'
            component={Historico}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={TabStyle.tabDiv}>
                        <IconEstatisticas fill={focused?'#2854F1':'#748C94'} width={25} height={25}/>
                        <Text style={[TabStyle.tabText, focused && TabStyle.colorFocused]}>
                            HISTÓRICO
                        </Text>
                    </View>
                )
            }}
        />
    </Tab.Navigator>
  );
}; 