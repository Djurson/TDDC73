import { styles } from "@/utils/util";
import { Button, Text, TextInput, View } from "react-native";

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
