import React from "react";
import {View, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = ({temp}) => {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}></View>
            
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp: {
        fontSize:40
    },
    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Weather;