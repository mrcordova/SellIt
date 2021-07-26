import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
      ios: {
        fontSize: 20,
        fontFamily: "Aventir",
      },
    }),
  },
});

export default styles;
