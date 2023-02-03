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
        height: 180,
    },
    period: {
        fontSize: 22,
        color: 'white',
        marginBottom: 20,
        marginTop: 10,
    },
    temp: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
    },
});

export default styles;