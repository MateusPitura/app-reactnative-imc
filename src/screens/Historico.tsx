import React, {useState} from 'react'
import {FlatList, View, Text, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default function(){

    const [data, setData] = useState([]);

    const handleFetchData = async () => {
        const response = await AsyncStorage.getItem("@meuimc:calculos");
        setData(JSON.parse(response));
    }

    return(
        <View>
            <Button
                title='Aperte aqui'
                onPress={()=>handleFetchData()}
            />
            <Text>Teste</Text>
            <FlatList
                data={data}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View>
                    <Text>Data: {item.date}</Text>
                    <Text>IMC: {item.imc}</Text>
                    <Text>Peso: {item.peso}</Text>
                </View>}
            />
        </View>
    )
}