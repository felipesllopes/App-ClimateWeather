import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function InfoAdc() {

    const [wind, setWind] = useState(40);
    const [humidity, setHumidity] = useState(62);
    const [maxTemp, setMaxTemp] = useState(38);
    const [minTemp, setMinTemp] = useState(27);

    return (
        <View style={styles.addInfo}>
            <Text style={styles.tittleInfo}>Informações Adicionais</Text>

            <View style={styles.tabInfo}>
                <Text style={styles.textInfo}>Vento <Feather name="wind" size={20} color="black" /> </Text>
                <Text>{wind} km/h</Text>
                <Text style={styles.textInfo}>Humidade <Ionicons name="water" size={20} color="black" /> </Text>
                <Text>{humidity} mm</Text>
                <Text style={styles.textInfo}>Temp máx <Ionicons name="arrow-up" size={20} color="black" /> </Text>
                <Text>{maxTemp}ºC</Text>
                <Text style={styles.textInfo}>Temp mín <Ionicons name="arrow-down" size={20} color="black" /> </Text>
                <Text>{minTemp}ºC</Text>
            </View>
        </View>
    )
}