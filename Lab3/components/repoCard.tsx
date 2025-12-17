import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TrendingResponse } from "@/utils/octokit";
import { cardGlow, colorScheme } from "@/utils/colors";
import { Link } from "expo-router";

export function TrendingRepoCard({ repo }: { repo: TrendingResponse }) {
  return (
    <Link href={{ pathname: "/repodetails", params: { repo: JSON.stringify(repo) } }}>
      <View
        style={{
          backgroundColor: `rgba(${colorScheme.card}, 1)`,
          padding: 16,
          borderRadius: 12,
          boxShadow: cardGlow("2xl"),
          elevation: 3,
          width: "100%",
          alignSelf: "center",
        }}>
        {/* Title */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 6,
            color: `rgba(${colorScheme.foreground}, 1)`,
          }}>
          {repo.name}
        </Text>

        {/* Description */}
        <Text style={{ color: `rgba(${colorScheme.foreground}, 0.4)`, marginBottom: 12 }}>
          {repo.description || "No description provided."}
        </Text>

        {/* Stats */}
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="star" size={20} color="#f5b50a" />
            <Text style={{ marginLeft: 4, color: `rgba(${colorScheme.foreground}, 1)` }}>
              {repo.stars}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="call-split" size={20} color="#888" />
            <Text style={{ marginLeft: 4, color: `rgba(${colorScheme.foreground}, 1)` }}>
              {repo.forks}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="schedule" size={20} color="#888" />
            <Text style={{ marginLeft: 4, color: `rgba(${colorScheme.foreground}, 1)` }}>
              {new Date(repo.created_at).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>
    </Link>
  );
}
