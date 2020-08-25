import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstrom: {
        iconName: "weather-lightning",
        gradient: ["#0b8793", "#360033"],
        title: "Thunderstrom",
        subtitle: "Be careful"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#70e1f5", "#ffd194"],
        title: "Drizzle",
        subtitle: "Light rain falling in very fine drops"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#00d2ff", "#3a7bd5"],
        title: "Rain",
        subtitle: "Bring your umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#4b6cb7", "#182848"],
        title: "Snow",
        subtitle: "Do you wanna build a snowman?"
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "hmmmm is it weather?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FEF253", "#FF7300"],
        title: "Sunny day :)",
        subtitle: "Come out and play"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Cloudy",
        subtitle: "Not bad :("
    },
    Dust: {
        iconName: "weather-sunset",
        gradient: ["#8ca6db", "#b993d6"],
        title: "Dust",
        subtitle: "Wear the mask"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#5f2c82"],
        title: "Haze",
        subtitle: "Be careful when you are driving"
        
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#49a09d", "#D39D38"],
        title: "Mist",
        subtitle: "You won't be able to see"
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={[weatherOptions[condition].gradient[0], weatherOptions[condition].gradient[1]]} style={styles.container} >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={(weatherOptions[condition] != undefined)? weatherOptions[condition].iconName : "weather-sunset"}
                    color="white"
                    size={96} />
                <Text style={styles.temp}>{temp} ℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstrom",
        "Drizzle",
        "Rain", 
        "Snow", 
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Haze",
        "Mist"
    ])

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {    //두개의 스타일 add가능
        paddingHorizontal: 20,
        alignItems: "flex-start"    //align to the left
    }
});