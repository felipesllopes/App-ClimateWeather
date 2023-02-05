import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cards: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    card: {
        backgroundColor: 'red',
        alignItems: 'center',
        marginHorizontal: 10,
        width: 110,
        borderRadius: 10,
        height: 170,
    },
    period: {
        fontSize: 22,
        color: 'white',
        marginBottom: 15,
        marginTop: 7,
    },
    temp: {
        fontSize: 20,
        color: 'white',
        marginTop: 15,
    },
});

export default styles;