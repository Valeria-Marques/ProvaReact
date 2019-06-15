import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/Home";
import PesquisaScreen from "./src/screens/Pesquisa";

const AppNavigator = createStackNavigator ({
    Home:{
      screen: HomeScreen
    },
    Pesquisa:{
      screen: PesquisaScreen
    }
});


export default createAppContainer(AppNavigator);