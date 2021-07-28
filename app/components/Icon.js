import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function icon({
  name,
  size = 40,
  backgroundColor = "#000",
  icoColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={icoColor} size={size * 0.5} />
    </View>
  );
}
const styles = StyleSheet.create({});
export default icon;