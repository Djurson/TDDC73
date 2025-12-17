import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TrendingResponse } from "@/utils/octokit";
import { cardGlow, colorScheme, languageColors } from "@/utils/colors";
import { Link, useRouter } from "expo-router";
import { normalizeLanguage } from "@/utils/data";

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}

export function TrendingRepoCard({ repo }: { repo: TrendingResponse }) {
  const router = useRouter();
  const languageKey = normalizeLanguage(repo.languages);
  return (
    <Pressable onPress={() => {}} style={styles.card}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
            <View style={styles.ownerRow}>
              <Text style={styles.mutedText}>{repo.owner}</Text>
              <Text style={styles.mutedSlash}>/</Text>
            </View>
            <Text style={styles.mutedText}>{repo.created_at}</Text>
          </View>

          <Text style={styles.repoName} numberOfLines={1}>
            {repo.name}
          </Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {repo.description ?? "No description provided"}
      </Text>

      <View style={styles.trending}>
        <View style={styles.language}>
          <View
            style={[
              styles.languageDot,
              {
                backgroundColor: languageKey ? languageColors[languageKey] : "transparent",
              },
            ]}
          />
          <Text style={styles.languageText}>{repo.languages}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <MaterialIcons name="star" size={14} color={colorScheme.mutedForeground} />
              <Text style={styles.statText}>{formatNumber(repo.stars)}</Text>
            </View>

            <View style={styles.statItem}>
              <MaterialIcons name="call-split" size={14} color={colorScheme.mutedForeground} />
              <Text style={styles.statText}>{formatNumber(repo.forks)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(21, 24, 30, 0.5)",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(39, 44, 53, 0.5)",
    marginBottom: 18,
    boxShadow: cardGlow("md"),
  },
  header: {
    marginBottom: 12,
  },
  ownerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  mutedText: {
    fontSize: 12,
    color: colorScheme.mutedForeground,
  },
  mutedSlash: {
    fontSize: 12,
    color: `rgba(123, 137, 157, 0.5)`,
  },
  repoName: {
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: 600,
    color: colorScheme.foreground,
    maxWidth: 250,
  },
  description: {
    fontSize: 14,
    color: colorScheme.mutedForeground,
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  language: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  languageText: {
    fontSize: 14,
    color: colorScheme.secondaryForeground,
  },
  stats: {
    flexDirection: "row",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: colorScheme.mutedForeground,
  },
  trending: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    marginTop: 6,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: `rgba(39, 44, 53, 0.5)`,
  },
  trendingText: {
    fontSize: 12,
    fontWeight: 500,
    color: colorScheme.primary,
  },
});
