import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';

export default function(){ 
  return(
      <NavigationContainer>
        <StatusBar
          backgroundColor={'#2854F1'}
        />
        <Tabs/>
      </NavigationContainer>
  );
}; 