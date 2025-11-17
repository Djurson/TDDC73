import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 72,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 32,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 32,
  },
});
