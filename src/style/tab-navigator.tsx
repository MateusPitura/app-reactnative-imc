import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    tabBox:{
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
    },
    tabText:{
        fontSize: 12,
    },
    tabDiv:{
        alignItems: 'center',
        justifyContent: 'center',
        top: 5,
    },
    tabIcon:{ //not used
        width: 24,
        height: 24,
    },
    tabButton:{
        top: -30, 
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
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