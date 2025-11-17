import { styles } from "@/utils/util";
import { Pressable, Text } from "react-native";

export function Button({ title }: { title: string }) {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? styles.buttonStylePressed : styles.buttonStyleNotPressed,
        styles.buttonStyleDefault,
      ]}>
      <Text style={{ color: "#000000" }}>{title}</Text>
    </Pressable>
  );
}
