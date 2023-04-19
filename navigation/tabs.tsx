import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Sobre from '../screens/Sobre';
import Calculadora from '../screens/Calculadora';
import Historico from '../screens/Historico';

const Tab = createBottomTabNavigator();

export default function(){ 
  return(
    <Tab.Navigator initialRouteName='Calculadora'>
        <Tab.Screen
            name='Sobre'
            component={Sobre}
            options={{title:'Sobre'}}
        />
        <Tab.Screen
            name='Calculadora'
            component={Calculadora}
            options={{title:'Calculadora'}}
        />
        <Tab.Screen
            name='Historico'
            component={Historico}
            options={{title:'Historico'}}
        />
    </Tab.Navigator>
  );
}; 