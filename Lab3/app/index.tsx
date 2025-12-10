import { getTrendingRepos, TrendingResponse } from "@/utils/octokit";
import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { TrendingRepoCard } from "@/components/repoCard";
import { LanguageSelect } from "@/components/dropdown";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        paddingTop: 36,
      }}>
      <LanguageSelect setSelected={setLanguage} currentSelected={language} />
      <ScrollView>
        {repos.map((repo, index) => {
          return <TrendingRepoCard key={index} repo={repo} />;
        })}
      </ScrollView>
    </View>
  );
}
