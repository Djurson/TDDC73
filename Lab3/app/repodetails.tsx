import { useLocalSearchParams } from "expo-router";
import { TrendingResponse } from "@/utils/octokit";
import { cardGlow, colorScheme } from "@/utils/colors";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function RepoScreen() {
  const { repo } = useLocalSearchParams();

  const repository: TrendingResponse = JSON.parse(repo);

  return (
    <View
      style={{
        backgroundColor: `rgba(${colorScheme.card}, 1)`,
        padding: 8,
        borderRadius: 12,
        boxShadow: cardGlow("2xl"),
        elevation: 3,
        alignSelf: "center",
        width: "98%",
      }}>
      {/* Title */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 6,
          color: `rgba(${colorScheme.foreground}, 1)`,
        }}>
        {repository.name}
      </Text>

      {/* Description */}
      <Text style={{ color: `rgba(${colorScheme.foreground}, 1)`, marginBottom: 12 }}>
        {repository.description || "No description provided."}
      </Text>
      {/* Language */}
      <Text style={{ color: `rgba(${colorScheme.foreground}, 1)`, marginBottom: 12 }}>
        {repository.languages}
      </Text>
      {/* Stats */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Stars */}
        <View style={{ alignItems: "center", flex: 1, borderRadius: 8 }}>
          <Feather name="star" size={24} color={`rgba(${colorScheme.primary}, 1)`} />
          <Text
            style={{
              color: `rgba(${colorScheme.foreground}, 1)`,
              marginBottom: 12,
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
            }}>
            {repository.stars}
          </Text>
          <Text style={{ color: `rgba(${colorScheme.mutedForeground}, 1)`, marginBottom: 12 }}>
            {"Stars"}
          </Text>
        </View>
        {/* Forks */}
        <View style={{ alignItems: "center", flex: 1, borderRadius: 8 }}>
          <FontAwesome6 name="code-fork" size={24} color={`rgba(${colorScheme.primary}, 1)`} />
          <Text
            style={{
              color: `rgba(${colorScheme.foreground}, 1)`,
              marginBottom: 12,
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
            }}>
            {repository.forks}
          </Text>
          <Text style={{ color: `rgba(${colorScheme.mutedForeground}, 1)`, marginBottom: 12 }}>
            {"Forks"}
          </Text>
        </View>
        {/* Today */}
        <View style={{ alignItems: "center", flex: 1, borderRadius: 8 }}>
          <Feather name="trending-up" size={24} color={`rgba(${colorScheme.primary}, 1)`} />
          <Text
            style={{
              color: `rgba(${colorScheme.foreground}, 1)`,
              marginBottom: 12,
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 10,
            }}>
            {repository.stars}
          </Text>
          <Text style={{ color: `rgba(${colorScheme.mutedForeground}, 1)`, marginBottom: 12 }}>
            {"Today"}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 12,
          backgroundColor: `rgba(${colorScheme.primary}, 1)`,
          borderRadius: 8,
          padding: 8,
        }}>
        <Text>{"Open in GitHub"}</Text>
        <EvilIcons name="external-link" size={24} color="black" />
      </View>
    </View>
  );
}
