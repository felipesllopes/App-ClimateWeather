import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Cards from './Cards';
import Header from './Header';
import InfoAdc from "./InfoAdc";

export default function Main() {

    return (
        <ImageBackground source={require('../img/background.jpg')} style={styles.container}>

            <Header />

            <Cards />

            <InfoAdc />

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});