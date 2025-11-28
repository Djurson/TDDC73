import { HeaderTitle } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#277500" style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#2ce18fff" },
          headerTitleStyle: { fontWeight: "bold" },
          headerTitle: "React Native",
        }}
      />
    </>
  );
}
