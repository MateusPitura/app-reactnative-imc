import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    displayView:{
        flex: 1,
        backgroundColor: 'rgba(223, 226, 237, 0.9)',
    },
    displayScroll:{
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 30,
        marginVertical: 60,
        padding: 20,
        backgroundColor: '#fff',
    },
    displayText:{
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent:{
        alignItems: 'center',
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
        textAlign: 'center',
    },
    screenTouchable:{
        backgroundColor: '#2854F1',
        borderRadius: 5,
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    layoutTouchable:{
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    },
    touchableText:{
        color: '#fff',
        fontSize: 16,
    },
})