import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstrom: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Stay in your place"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Clouds",
        subtitle: "I know, extremly boring"
    },
    Mist: {
        iconName: "MaterialCommunityIcons",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Smoky",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Fog",
        subtitle: "Just don't go outside."
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Sandy",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Ash",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Squally",
        subtitle: "Just don't go outside."
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Tornado!",
        subtitle: "Outside of the blankets is dangerous."
    }
}

export default function Weather({ temp, condition }) {
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" /> 
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                size={86} 
                color="white" 
                name={weatherOptions[condition].iconName}
            />
            <Text style={styles.temp}>{temp}℃</Text>
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
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 30,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "200",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "400",
        color: "white",
        fontSize: 23
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});