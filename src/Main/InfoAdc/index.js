import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function InfoAdc(props) {

    return (
        <View style={styles.addInfo}>
            <Text style={styles.tittleInfo}>Informações Adicionais</Text>

            <View style={styles.tabInfo}>
                <Text style={styles.textInfo}>Vento <Feather name="wind" size={20} color="black" />
                    <Text style={styles.props}> {props.wind} km/h</Text>
                </Text>

                <Text style={styles.textInfo}>Umidade <Ionicons name="water" size={20} color="black" />
                    <Text style={styles.props}> {props.moisture} mm</Text>
                </Text>

                <Text style={styles.textInfo}>Temp máx <Ionicons name="arrow-up" size={20} color="black" />
                    <Text style={styles.props}> {props.maxTemp}ºC</Text>
                </Text>

                <Text style={styles.textInfo}>Temp mín <Ionicons name="arrow-down" size={20} color="black" />
                    <Text style={styles.props}> {props.minTemp}ºC</Text>
                </Text>

            </View>
        </View>
    )
}