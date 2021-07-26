import { Button, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

function LoginBtn(props) {
  return <Button title="LOGIN" style={styles.login}></Button>;
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: colors.primaary,
    width: "100%",
  },
});
export default LoginBtn;
