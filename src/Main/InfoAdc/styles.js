import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addInfo: {
        marginTop: 30,
        width: 330,
        borderRadius: 10,
        height: 230,
        backgroundColor: '#CCC',
        alignSelf: 'center',
    },
    tittleInfo: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    tabInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 50,
    },
    textInfo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles;