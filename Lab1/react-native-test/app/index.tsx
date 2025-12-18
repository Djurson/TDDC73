import { Button } from "@/components/button";
import { SplitCircle } from "@/components/circle";
import { styles } from "@/utils/util";
import { Image, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.outerContainer}>
      <Image source={require("@/assets/icons/Diagram.png")} />
      <View style={styles.innerContainer}>
        <View style={styles.columnContainer}>
          <Button title="Button 1" />
          <Button title="Button 2" />
        </View>
        <View style={styles.columnContainer}>
          <Button title="Button 3" />
          <Button title="Button 4" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput style={styles.emailInputStyle} />
      </View>
    </View>
  );
}
