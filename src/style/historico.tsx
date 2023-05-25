import {StyleSheet} from "react-native";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "#DFE2ED",
    },
    cards:{
        backgroundColor: "#fff",
        margin: 3,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    informationSection:{
        flex: 3,
        //backgroundColor: "#0f0",
    },
    resultSection:{
        flex: 3,
        //backgroundColor: "#00f",
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttonSection:{
        flex: 1,
        //backgroundColor: "#f00",
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    informationText:{
        fontSize: 16,
    },
    resultText:{
        fontSize: 30,
    },
    gradient:{
        margin: 20,
        borderRadius: 10,
    }
})
