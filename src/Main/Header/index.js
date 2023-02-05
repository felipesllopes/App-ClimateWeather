import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Header(props) {

    ////////////////////////////////////////////////////////////////////
    // FALTA FORMATAR A DATA



    let data = new Date().toLocaleString("pt-BR");

    return (

        <View style={styles.header}>
            <Text style={styles.greetings}>Olá, Felipe!</Text>
            <Text style={styles.degrees}>{props.temperature}ºC</Text>
            <Ionicons name="sunny-outline" size={50} color="white" />
            <Text style={styles.locality}>{props.location}</Text>
            <Text style={styles.locality}>{data}</Text>


            <TouchableOpacity style={styles.buttomReload}>
                <Text style={styles.reload}>Atualizar </Text>
                <Ionicons name="reload" size={24} color="white" />
            </TouchableOpacity>
        </View>

    )
}