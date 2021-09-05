import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";

function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default" />
            <Text style={styles.text}>Getting the fucking Weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 80,
        backgroundColor: "#fdf6aa"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
    }
});

export default Loading