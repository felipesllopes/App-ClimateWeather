import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import api from '../../Api/api';
import styles from "./styles";

export default function Header() {

    const [location, setLocation] = useState(null);
    const [long, setLong] = useState(null);
    const [lat, setLat] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão negada');
                return;
            }

            let slocation = await Location.getCurrentPositionAsync({});
            setLocation(slocation);
            setLong(slocation.coords.longitude);
            setLat(slocation.coords.latitude);

            // const response = await api.get('=' + lat + '&lon=' + long + '&appid=453d5754ff46b5aa37422bee730a7f6d');
            // console.log(response.data);
            console.log(location);

        })();
    }, []);

    var day = new Date().getDay();
    var month = new Date().getMonth() + 1;
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    return (

        <View style={styles.header}>
            <Text style={styles.greetings}>Olá, Felipe!</Text>
            <Text style={styles.degrees}>30ºC</Text>
            <Ionicons name="sunny-outline" size={50} color="white" />
            <Text style={styles.locality}>Rio de Janeiro, {day}/{month}, {hours}:{minutes}</Text>

            <TouchableOpacity style={styles.buttomReload}>
                <Text style={styles.reload}>Atualizar </Text>
                <Ionicons name="reload" size={24} color="white" />
            </TouchableOpacity>
        </View>

    )
}