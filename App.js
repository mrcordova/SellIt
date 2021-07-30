// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { Button, Image, StatusBar } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}
