import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    screenLayout:{
        flex: 1,
        backgroundColor:'#DFE2ED',
    },
    viewLayout:{
        padding: 20,
        paddingBottom: 200,
    },
    screenText:{
        fontSize: 20,
    },
    screenAlert:{
        padding: 5,
        marginBottom: 15,
        borderRadius: 5, 
        backgroundColor: '#D3D3D3',
    },
    screenInput:{
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 15,
        marginTop: 15,
        paddingLeft: 15,
    },
    checkboxLayout:{
        marginTop: 20,
        marginBottom: 20,
    },
    screenTouchable:{
        backgroundColor: '#2854F1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
    },
    touchableText:{
        color: '#fff',
        fontSize: 16,
    },
    viewIsVisible:{
        marginBottom: 10,
        marginTop: -10,
    },
    textIsVisible:{
        color: 'red',
    },
})