import React from 'react';
import {View, Text} from 'react-native'; 
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Sobre from './Telas/Sobre';
import Calculadora from './Telas/Calculadora';
import Historico from './Telas/Historico';

const tabs = createBottomTabNavigator();

export default function(){ 
  <NavigationContainer>
    <tabs.Navigator>
      <tabs.Screen
        name='Sobre'
        component={Sobre}
        options={{title:'Sobre'}}
      />
      <tabs.Screen
        name='Calculadora'
        componente={Calculadora}
        options={{title:'Calculadora'}}
      />
      <tabs.Screen
        name='Historico'
        componente={Historico}
        options={{title:'Historico'}}
      />
    </tabs.Navigator>
  </NavigationContainer>
}; 