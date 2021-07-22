// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import ViewImageScreen from "./app/screens/ViewImageScreen";


export default function App() {
  return <ViewImageScreen></ViewImageScreen>
    
}

