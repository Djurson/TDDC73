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
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 48,
    justifyContent: "center",
    width: "100%",
  },
  buttonStyleDefault: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonStyleNotPressed: {
    backgroundColor: "#c2c2c2",
  },
  buttonStylePressed: {
    backgroundColor: "#ebebeb",
  },
  emailInputStyle: {
    height: 32,
    width: 168,
    borderBottomWidth: 2,
    borderBottomColor: "#ff3030ff",
    color: "#ff3030ff",
  },
});
