import {StyleSheet} from "react-native";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "#DFE2ED",
    },
    cards:{
        backgroundColor: "#fff",
        margin: 11,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    informationSection:{
        flex: 3,
        //backgroundColor: "#0f0",
    },
    buttonSection:{
        flex: 1,
        //backgroundColor: "#f00",
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
})
