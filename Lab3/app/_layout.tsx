import { TopBar } from "@/components/topbar";
import { colorScheme } from "@/utils/colors";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ backgroundColor: `rgba(${colorScheme.background}, 1)`, flex: 1, gap: 8 }}>
      <TopBar />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: `rgba(${colorScheme.background}, 1)` },
        }}
      />
      ;
    </View>
  );
}
