// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppText from "./app/components/AppText";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginBtn from "./app/components/LoginBtn";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";

export default function App() {
  return <MessageScreen />;
}
