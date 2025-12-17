import { cardGlow, colorScheme } from "@/utils/colors";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
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
        width: "100%",
      }}>
      <Dropdown
        activeColor={`rgba(${colorScheme.primaryForeground}, 1)`}
        style={styles.dropdown}
        showsVerticalScrollIndicator={false}
        containerStyle={styles.containerStyle}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
        itemContainerStyle={styles.item}
        itemTextStyle={styles.itemText}
        maxHeight={300}
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

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: `rgba(${colorScheme.card}, 0.8)`,
    borderRadius: 12,
    padding: 12,
    boxShadow: cardGlow("2xl"),
    elevation: 2,
    width: "100%",
    borderWidth: 2,
    borderColor: `rgba(${colorScheme.border}, 1)`,
  },
  containerStyle: {
    backgroundColor: `rgba(${colorScheme.card}, 1)`,
    borderWidth: 2,
    borderColor: `rgba(${colorScheme.border}, 1)`,
    borderRadius: 12,
    padding: 14,
    boxShadow: cardGlow("2xl"),
    zIndex: 14,
    elevation: 10,
    color: `rgba(${colorScheme.foreground}, 1)`,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingHorizontal: 12,
    color: `rgba(${colorScheme.foreground}, 1)`,
  },
  item: {
    padding: 0,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: `rgba(${colorScheme.foreground}, 1)`,
    backgroundColor: `rgba(${colorScheme.card}, 1)`,
  },
  itemText: {
    color: `rgba(${colorScheme.foreground}, 1)`,
    backgroundColor: `rgba(0,0,0,0)`,
  },
});
