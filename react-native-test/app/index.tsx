import { Button, Text, TextInput, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.columnContainer}>
          <Button title="Button 1"></Button>
          <Button title="Button 2"></Button>
        </View>
        <View style={styles.columnContainer}>
          <Button title="Button 3"></Button>
          <Button title="Button 4"></Button>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput placeholder="email input"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
