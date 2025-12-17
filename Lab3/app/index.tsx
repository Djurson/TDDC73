import { getTrendingRepos, TrendingResponse } from "@/utils/octokit";
import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { TrendingRepoCard } from "@/components/repoCard";
import { LanguageSelect } from "@/components/dropdown";
import { colorScheme } from "@/utils/colors";

export default function TrendingRepoList() {
  const [repos, setRepos] = useState<TrendingResponse[]>([]);
  const [language, setLanguage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const daysAgo = 31;

  useEffect(() => {
    async function load() {
      if (!language) return;

      const result = await getTrendingRepos(language, daysAgo);
      setRepos(result);
      setLoading(false);
    }
    load();
  }, [language]);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          paddingTop: 36,
          paddingHorizontal: 32,
          backgroundColor: `rgba(${colorScheme.background}, 1)`,
        }}>
        <LanguageSelect setSelected={setLanguage} currentSelected={language} />
        <ScrollView
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 64,
            backgroundColor: `rgb(${colorScheme.background})`,
          }}>
          {repos.map((repo, index) => {
            return <TrendingRepoCard key={index} repo={repo} />;
          })}
        </ScrollView>
      </View>
    </>
  );
}
