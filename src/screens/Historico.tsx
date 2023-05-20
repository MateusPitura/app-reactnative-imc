import React, {useState, useEffect} from 'react'
import {FlatList, View, Text, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default function(){

    const [data, setData] = useState([]);

    const handleFetchData = async () => { //Está atualizando loucamente
        const response = await AsyncStorage.getItem("@meuimc:calculos");
        console.log("update");
        const data = response? JSON.parse(response) : [];
        setData(data);
    }

    const excluir = async (id: string) => {
        const response = await AsyncStorage.getItem("@meuimc:calculos");
        const previousData = response? JSON.parse(response) : [];
        const data = previousData.filter((item: any) => item.id !== id);
        await AsyncStorage.setItem("@meuimc:calculos", JSON.stringify(data));
        setData(data);
    }

    useEffect(()=>{handleFetchData()}, [data]);

    return(
        <View>
            <FlatList
                data={data}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                <View
                style={{
                    backgroundColor: "#f00",
                    margin: 20,
                    padding: 20,
                }}
                >
                    <Text>Data: {item.date}</Text>
                    <Text>IMC: {item.imc}</Text>
                    <Text>Peso: {item.peso}</Text>
                    <Button
                        title="Lixo"
                        onPress={()=>{excluir(item.id)}}
                    />
                </View>}
            />
        </View>
    )
}