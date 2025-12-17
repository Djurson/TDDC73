import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { colorScheme, primayGlow } from "@/utils/colors";

export function TopBar() {
  return (
    <View
      style={{
        backgroundColor: `rgba(${colorScheme.card}, 1)`,
        borderBottomWidth: 1,
        boxShadow: primayGlow("sm"),
        borderColor: `rgba(${colorScheme.primary}, 0.1)`,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 24,
        gap: 16,
        paddingVertical: 24,
        overflow: "visible",
      }}>
      <View
        style={{
          backgroundColor: `rgba(${colorScheme.primary}, 0.2)`,
          boxShadow: primayGlow("lg"),
          padding: 12,
          borderRadius: 12,
        }}>
        <Feather name="github" size={36} color={`rgba(${colorScheme.primary}, 1)`} />
      </View>
      <View style={{ gap: 2 }}>
        <Text
          style={{
            color: `rgba(${colorScheme.foreground}, 1)`,
            fontSize: 24,
            fontWeight: 700,
          }}>
          Trending
        </Text>
        <Text style={{ color: `rgba(${colorScheme.mutedForeground}, 1)` }}>
          GitHub Repositories
        </Text>
      </View>
    </View>
  );
}
