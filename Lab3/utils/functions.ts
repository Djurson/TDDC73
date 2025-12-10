import axios from "axios";
import { TryCatch } from "./util";

export async function FetchRepositories(url: string) {
  const accessToken = process.env.PAT;
  const { data, error } = await TryCatch(
    axios.get(url, {
      params: {
        q: "stars:>1",
        sort: "stars",
        order: "desc",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "React-Native-Github-App",
      },
    })
  );

  if (error !== null) {
    if (axios.isAxiosError(error)) {
      console.error("GitHub API felstatus:", error.response?.status);
      console.error("Felmeddelande:", error.response?.data.message);
    } else {
      console.error("Ett oväntat fel inträffade:", error);
    }
    return null;
  }

  const projects = data.data;
  return projects;
}
