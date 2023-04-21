import React from 'react'
import {SafeAreaView, ScrollView, View, Text} from 'react-native'
import ScreenStyle from '../style/screen'

export default function(){
    return(
        <SafeAreaView style={ScreenStyle.screenLayout}>
            <ScrollView>
                <View style={ScreenStyle.viewLayout}>
                    <Text style={ScreenStyle.screenAlert}>
                        Conteúdo gerado pelo ChatGPT
                    </Text>
                    <Text style={ScreenStyle.screenText}>
                        O Índice de Massa Corporal (IMC) é uma medida utilizada para avaliar o peso de uma pessoa em relação à sua altura. Essa medida é amplamente utilizada como um indicador da saúde e do risco de doenças associadas ao excesso ou à falta de peso.
                        {'\n\n'}
                        O IMC é calculado dividindo o peso da pessoa pela sua altura ao quadrado. O resultado é um número que indica se a pessoa está dentro do peso ideal, com sobrepeso ou obesidade, ou abaixo do peso adequado.
                        {'\n\n'}
                        Os valores de referência do IMC variam de acordo com a idade e o sexo da pessoa, mas geralmente um IMC entre 18,5 e 24,9 é considerado saudável. Um IMC entre 25 e 29,9 indica sobrepeso e um IMC acima de 30 indica obesidade.
                        {'\n\n'}
                        É importante ressaltar que o IMC é uma medida simples e fácil de calcular, mas não deve ser utilizada como única forma de avaliação da saúde de uma pessoa. Outros fatores, como a composição corporal, a distribuição de gordura no corpo e o nível de atividade física, devem ser considerados na avaliação do estado nutricional de uma pessoa.
                        {'\n\n'}
                        Além disso, o IMC não é um indicador preciso para todas as pessoas, especialmente aquelas que possuem muita massa muscular, como atletas e fisiculturistas. Nesses casos, outras medidas, como a circunferência da cintura, podem ser mais adequadas para avaliar a saúde da pessoa.
                        {'\n\n'}
                        Em resumo, o IMC é uma medida importante para avaliar o peso de uma pessoa em relação à sua altura, mas deve ser interpretado com cautela e complementado por outras avaliações da saúde. Consultar um profissional de saúde pode ajudar a entender melhor as implicações do IMC para a saúde de cada pessoa.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}