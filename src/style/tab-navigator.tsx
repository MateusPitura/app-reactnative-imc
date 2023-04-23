import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    tabBox:{
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 90,
    },
    tabText:{
        top: 5,
        fontSize: 12,
        color: '#748C94',
    },
    colorFocused:{
        color: '#2854F1',
    },
    tabDiv:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#2854F1',
    },
    highlightBottom:{
        top: -30, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    itenShadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
})