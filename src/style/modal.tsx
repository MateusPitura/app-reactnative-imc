import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    displayView:{
        flex: 1,
        backgroundColor: 'rgba(223, 226, 237, 0.80)',
    },
    displayScroll:{
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 60,
        padding: 20,
        backgroundColor: '#00f',
    },
    displayText:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0f0',
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
    screenTouchable:{
        backgroundColor: '#2854F1',
        borderRadius: 5,
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
    },
    layoutTouchable:{
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'flex-start',
        backgroundColor: '#000',
        position: 'absolute', left: 0, right: 0, bottom: 0//insight interessante
    },
    touchableText:{
        color: '#fff',
        fontSize: 16,
    },
})