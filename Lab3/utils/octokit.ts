import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";

/* https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories */
type GitHubRepo = Endpoints["GET /search/repositories"]["response"]["data"]["items"];

export type TrendingResponse = {
  id: number;
  name: string;
  fullname: string;
  stars: number;
  description: string | null;
  url: string;
  created_at: string;
  forks: number;
  languages: string | null;
  owner: string | null | undefined;
};

const octokit = new Octokit({
  auth: process.env.PAT,
});

export async function getTrendingRepos(
  language: string,
  daysAgo: number
): Promise<TrendingResponse[]> {
  const date = new Date();

  date.setDate(date.getDate() - daysAgo);

  const cutoffDate = date.toISOString().split("T")[0];

  const queryString = `language:${language} created:>${cutoffDate} pushed:>${cutoffDate}`;

  console.log(`Searching with query: ${queryString}`);

  try {
    const response = await octokit.request("GET /search/repositories", {
      q: queryString,
      sort: "stars",
      order: "desc",
      per_page: 20,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return response.data.items.map((repo) => ({
      id: repo.id,
      name: repo.name,
      fullname: repo.full_name,
      stars: repo.stargazers_count,
      description: repo.description,
      url: repo.html_url,
      created_at: repo.created_at.split("T")[0],
      forks: repo.forks_count,
      languages: repo.language,
      owner: repo.owner?.login,
    }));
  } catch (error) {
    console.error("Fel vid anrop till GitHub API:", error);
    return [];
  }
}
