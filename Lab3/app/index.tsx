import { getTrendingRepos, TrendingResponse } from "@/utils/octokit";
import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { TrendingRepoCard } from "@/components/repoCard";
import { LanguageSelect } from "@/components/dropdown";
import { colorScheme } from "@/utils/colors";
import { CommonLanguages, DataPeriods } from "@/utils/data";

export default function TrendingRepoList() {
  const [repos, setRepos] = useState<TrendingResponse[]>([]);
  const [language, setLanguage] = useState<string>("Python");
  const [loading, setLoading] = useState(false);
  const [daysAgo, setDaysAgo] = useState<number>(31);

  useEffect(() => {
    async function load() {
      if (!language) return;

      const result = await getTrendingRepos(language, daysAgo);
      setRepos(result);
      setLoading(false);
    }
    load();
  }, [language]);

  console.log(loading);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 12,
          paddingHorizontal: 32,
          backgroundColor: colorScheme.background,
        }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            gap: 24,
          }}>
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={{ color: `rgba(${colorScheme.foreground}, 0.5)`, fontWeight: 600 }}>
              Language:
            </Text>
            <LanguageSelect
              onSelect={(item) => {
                setLoading(true);
                setLanguage(item.value as string);
              }}
              placeholder="Select a language"
              data={CommonLanguages}
              currentSelected={language}
            />
          </View>
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={{ color: `rgba(${colorScheme.foreground}, 0.5)`, fontWeight: 600 }}>
              Since:
            </Text>
            <LanguageSelect
              onSelect={(item) => {
                setLoading(true);
                setDaysAgo(item.value as number);
              }}
              currentSelected={daysAgo.toString()}
              data={DataPeriods}
              placeholder="This month"
            />
          </View>
        </View>

        {loading ? (
          <></>
        ) : (
          <>
            {repos.length > 0 && (
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    color: colorScheme.mutedForeground,
                    fontSize: 14,
                    fontWeight: 700,
                  }}>
                  Results: {repos.length}
                </Text>
              </View>
            )}
            <FlatList
              data={repos}
              keyExtractor={(repo) => repo.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={(info) => <TrendingRepoCard repo={info.item} />}></FlatList>
          </>
        )}
      </View>
    </>
  );
}
