import { FetchRepositories } from "@/utils/functions";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetch() {
      const result = await FetchRepositories(
        "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc"
      );

      if (result !== null) {
        setData(result);
      }
    }

    fetch();
  }, []);

  console.log(data);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
