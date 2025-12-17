import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { colorScheme, primayGlow } from "@/utils/colors";

const TrendingHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.contentRow}>
          <View style={styles.leftSection}>
            <View style={styles.iconWrapper}>
              <View style={styles.githubIconBox}>
                <Feather name="github" size={20} color={colorScheme.primary} />
              </View>

              <View style={styles.flameIconBox}>
                <FontAwesome6 name="fire-flame-curved" size={12} color={colorScheme.primary} />
              </View>
            </View>

            <View>
              <Text style={[styles.gradientText, styles.text]}>Trending</Text>
              <Text style={styles.subtitle}>GitHub Repositories</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "rgba(21, 24, 30, 0.8)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(39, 44, 53, 0.5)",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    boxShadow: primayGlow("sm"),
  },
  headerContainer: {
    paddingHorizontal: 32,
    paddingTop: 16,
    paddingBottom: 8,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    position: "relative",
    marginRight: 12,
  },
  githubIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(25, 230, 212, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: primayGlow("sm"),
  },
  flameIconBox: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colorScheme.background,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colorScheme.border,
    elevation: 2,
  },
  gradientText: {
    backgroundImage: `linear-gradient(90deg, rgba(25, 230, 212, 0.9), rgb(0,211,238))`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  subtitle: {
    fontSize: 12,
    color: colorScheme.mutedForeground,
  },
  text: {
    fontSize: 24,
    fontWeight: 900,
  },
});

export { TrendingHeader };
