import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TrendingResponse } from "@/utils/octokit";

export function TrendingRepoCard({ repo }: { repo: TrendingResponse }) {
  function click() {
    console.log("Hej från: ", repo.name);
  }

  return (
    <Pressable
      style={{
        backgroundColor: "#fff",
        padding: 16,
        marginVertical: 8,
        borderRadius: 12,
        boxShadow: "0 2px 6px rgb(0,0,0,0.3)",
        elevation: 3,
        width: "90%",
        alignSelf: "center",
      }}
      onPress={click}>
      {/* Title */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 6 }}>{repo.name}</Text>

      {/* Description */}
      <Text style={{ color: "#555", marginBottom: 12 }}>
        {repo.description || "No description provided."}
      </Text>

      {/* Stats */}
      <View style={{ flexDirection: "row", gap: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="star" size={20} color="#f5b50a" />
          <Text style={{ marginLeft: 4 }}>{repo.stars}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="call-split" size={20} color="#888" />
          <Text style={{ marginLeft: 4 }}>{repo.forks}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="schedule" size={20} color="#888" />
          <Text style={{ marginLeft: 4 }}>{new Date(repo.created_at).toLocaleDateString()}</Text>
        </View>
      </View>
    </Pressable>
  );
}
