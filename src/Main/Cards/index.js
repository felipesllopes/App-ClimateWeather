import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Cards() {
    return (
        <View style={styles.cards}>

            <View style={[styles.card, { backgroundColor: '#ECC705' }]}>
                <Text style={styles.period}>Manhã</Text>
                <Ionicons name="sunny-outline" size={50} color="white" />
                <Text style={styles.temp}>26ºC</Text>
            </View>

            <View style={[styles.card, { backgroundColor: '#FFA500' }]}>
                <Text style={styles.period}>Tarde</Text>
                <Ionicons name="sunny-outline" size={50} color="white" />
                <Text style={styles.temp}>26ºC</Text>
            </View>

            <View style={[styles.card, { backgroundColor: '#0000EF' }]}>
                <Text style={styles.period}>Noite</Text>
                <Ionicons name="sunny-outline" size={50} color="white" />
                <Text style={styles.temp}>26ºC</Text>
            </View>

        </View>
    )
}