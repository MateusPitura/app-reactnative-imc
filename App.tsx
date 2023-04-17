import React from 'react';
import {View, Text} from 'react-native'; 

const fun = ()=>{
  return "Pao"
}

export default function(){ 
  return( 
    <View>  
      <Text>Mateus {fun()}</Text> 
    </View> 
  ); 
}; 