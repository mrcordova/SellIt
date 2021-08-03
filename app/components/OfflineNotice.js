import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
function OfflineNotice(props) {
  const netinfo = useNetInfo();
  if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Conection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    elevation: 1,
    top: Constants.statusBarHeight,
    width: "100%",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
