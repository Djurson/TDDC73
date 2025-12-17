import { Link, useLocalSearchParams } from "expo-router";
import { TrendingResponse } from "@/utils/octokit";
import { cardGlow, colorScheme, languageColors, primayGlow } from "@/utils/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { normalizeLanguage } from "@/utils/data";
import { formatNumber } from "@/utils/functions";

function NotValidRepo() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 24, color: colorScheme.foreground, fontWeight: 800 }}>
        Not a valid repository
      </Text>
      <Link
        href={{ pathname: "/" }}
        style={{
          color: colorScheme.primary,
          textDecorationLine: "underline",
          fontSize: 16,
          fontWeight: 800,
        }}>
        Go Back
      </Link>
    </View>
  );
}

export default function RepoScreen() {
  const { repo } = useLocalSearchParams();

  if (!repo) return <NotValidRepo />;

  const repository: TrendingResponse = JSON.parse(repo as string);
  if (!repository?.name) return <NotValidRepo />;

  const languageKey = normalizeLanguage(repository.languages);
  const languageColor = languageKey ? languageColors[languageKey] : colorScheme.mutedForeground;

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Link href="/" style={styles.backButton}>
          <Feather name="arrow-left" size={20} color={colorScheme.foreground} />
        </Link>

        <Text style={styles.headerTitle} numberOfLines={1}>
          {repository.owner}/{repository.name}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.titleRow}>
            <View style={styles.repoIcon}>
              <Text style={styles.repoIconText}>{repository.name.charAt(0).toUpperCase()}</Text>
            </View>

            <View>
              <Text style={styles.owner}>{repository.owner}</Text>
              <Text style={styles.repoName}>{repository.name}</Text>
            </View>
          </View>

          <Text style={styles.description}>
            {repository.description || "No description provided"}
          </Text>

          <View style={styles.metaRow}>
            <View style={styles.languageRow}>
              <View style={[styles.languageDot, { backgroundColor: languageColor }]} />
              <Text style={styles.languageText}>{repository.languages}</Text>
            </View>

            <View style={styles.dateRow}>
              <Feather name="calendar" size={14} color={colorScheme.mutedForeground} />
              <Text style={styles.dateText}>Created {repository.created_at}</Text>
            </View>
          </View>

          <View style={styles.statsGrid}>
            <StatCard
              icon={<Feather name="star" size={20} color={colorScheme.primary} />}
              value={formatNumber(repository.stars)}
              label="Stars"
            />
            <StatCard
              icon={<FontAwesome6 name="code-fork" size={20} color={colorScheme.primary} />}
              value={formatNumber(repository.forks)}
              label="Forks"
            />
          </View>

          <Pressable style={styles.githubButton}>
            <Feather name="external-link" size={16} color={colorScheme.primaryForeground} />
            <Text style={styles.githubButtonText}>Open on GitHub</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      {icon}
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colorScheme.background,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  notFoundTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colorScheme.foreground,
  },

  goBack: {
    color: colorScheme.primary,
    fontWeight: "600",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
    backgroundColor: "rgba(21, 24, 30, 0.8)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(39, 44, 53, 0.5)",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    boxShadow: primayGlow("sm"),
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 8,
  },

  backButton: {
    padding: 6,
    borderRadius: 8,
  },

  headerTitle: {
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "600",
    color: colorScheme.foreground,
    flex: 1,
  },

  content: {
    padding: 16,
  },

  card: {
    backgroundColor: "rgba(21, 24, 30, 0.7)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(39, 44, 53, 0.5)",
    boxShadow: cardGlow("xl"),
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },

  repoIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "rgba(25, 230, 212, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  repoIconText: {
    fontSize: 22,
    fontWeight: "800",
    color: colorScheme.primary,
  },

  owner: {
    fontSize: 12,
    color: colorScheme.mutedForeground,
  },

  repoName: {
    fontFamily: "monospace",
    fontSize: 20,
    fontWeight: "700",
    color: colorScheme.foreground,
  },

  description: {
    color: colorScheme.secondaryForeground,
    lineHeight: 20,
    marginBottom: 20,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  languageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  languageText: {
    fontSize: 14,
    fontWeight: "500",
    color: colorScheme.foreground,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  dateText: {
    fontSize: 12,
    color: colorScheme.mutedForeground,
  },

  statsGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: "rgba(21, 24, 30, 0.6)",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(39, 44, 53, 0.4)",
  },

  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: colorScheme.foreground,
    marginTop: 6,
  },

  statLabel: {
    fontSize: 11,
    color: colorScheme.mutedForeground,
  },

  githubButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: colorScheme.primary,
    paddingVertical: 14,
    borderRadius: 12,
  },

  githubButtonText: {
    fontWeight: "600",
    color: colorScheme.primaryForeground,
  },
});
