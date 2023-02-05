import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { ImageBackground, RefreshControl, StyleSheet } from "react-native";
import Cards from './Cards';
import Header from './Header';
import InfoAdc from "./InfoAdc";

export default function Main() {
RefreshControl
    /**
     * Const's para api Weather
     */
    const [currentLocation, setCurrentLocation] = useState(null);
    const [long, setLong] = useState(null);
    const [lat, setLat] = useState(null);

    /**
     * Const's para function Header
     */
    const [location, setLocation] = useState('Rio de Janeiro');
    const [temperature, setTemperature] = useState(0);

    /**
     * Const's para function Cards
     */
    const [morningTemperature, setMorningTemperature] = useState(0);
    const [afternoonTemperature, setAfternoonTemperature] = useState(0);
    const [nigthTemperature, setNigthTemperature] = useState(0);

    /**
     * Const's para function InfoAdc
     */
    const [wind, setWind] = useState(0);
    const [moisture, setMoisture] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);

    /**
     * função para pegar a localização
     */
    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão negada');
                return;
            }

            let slocation = await Location.getCurrentPositionAsync({});
            setCurrentLocation(slocation);
            setLong(slocation.coords.longitude);
            setLat(slocation.coords.latitude);

            console.log(currentLocation);
        })();
    }, []);


    return (
        <ImageBackground source={require('../img/background.jpg')} style={styles.container}>

            <Header temperature={temperature} location={location} />

            <Cards morningTemperature={morningTemperature} afternoonTemperature={afternoonTemperature}
                nigthTemperature={nigthTemperature} />

            <InfoAdc wind={wind} moisture={moisture} maxTemp={maxTemp} minTemp={minTemp} />

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});