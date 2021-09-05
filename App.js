import React from 'react';
import {Alert} from "react-native"
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KET = "fcfd013765e7f441f7a7474019ab924b";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KET}&units=metric`
    );

    console.log(data);
  };

  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();

      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading:false});
    } catch { 
      Alert.alert("Can't find you", "So sad")
    }
    
  }
  
  componentDidMount(){
    this.getLocation();
  }
  render(){ 
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : null
  };
}