import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    viewLayout:{
        flex: 1,
    },
    displayScroll:{
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 60,
        padding: 20,
        backgroundColor: '#fff',
    },
    displayText:{
        alignItems: 'center'
    },
    background:{
        flex:1,
        backgroundColor: 'rgba(223, 226, 237, 0.80)'
    },
    titleText:{
        fontSize: 30,
    },
    resultadoValue:{
        fontWeight: 'bold',
        fontSize: 30,
    },
    resultadoText:{
        fontSize: 20,
    },
    buttonDisplay:{
        justifyContent: 'flex-end' //não colocou em baixo
    }
})