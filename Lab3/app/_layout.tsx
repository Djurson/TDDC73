import { TrendingHeader } from "@/components/topbar";
import { colorScheme } from "@/utils/colors";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ backgroundColor: colorScheme.background, flex: 1, gap: 12 }}>
      <TrendingHeader />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colorScheme.background },
        }}
      />
    </View>
  );
}
