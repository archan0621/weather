import React from "react";
import {Alert} from "react-native";
import { StyleSheet, Text, View,  StatusBar} from 'react-native';
import * as Location from 'expo-location';
import axios from "axios";
import Loading from './Loading';
import Weather from "./Weather";

const API_KEY = "902ca10063feb0211f04abbebbebcf8d";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}8&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false, 
      condition: weather[0].main, 
      temp: temp
    });
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync(); // permission을 안주면 에러
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}