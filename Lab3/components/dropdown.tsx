import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export type DropDownData = {
  label: string;
  value: string;
};

const common_languages: DropDownData[] = [
  { label: "Python", value: "Python" },
  { label: "JavaScript", value: "JavaScript" },
  { label: "Java", value: "Java" },
  { label: "C#", value: "C#" },
  { label: "C++", value: "C++" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "SQL", value: "SQL" },
  { label: "Go", value: "Go" },
  { label: "PHP", value: "PHP" },
  { label: "C", value: "C" },
];

export function LanguageSelect({
  currentSelected,
  setSelected,
}: {
  currentSelected: string | null;
  setSelected: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 24,
        gap: 18,
        width: "100%",
      }}>
      {/* <Text>Select a language:</Text> */}
      <Dropdown
        style={{ width: "80%" }}
        maxHeight={300}
        search
        labelField="label"
        valueField="value"
        placeholder="Select language"
        data={common_languages}
        value={currentSelected}
        onChange={(item) => {
          setSelected(item.value);
        }}
      />
    </View>
  );
}
