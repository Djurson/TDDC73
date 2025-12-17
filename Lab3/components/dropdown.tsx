import { cardGlow, colorScheme } from "@/utils/colors";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export type DropDownData = {
  label: string;
  value: string | number;
  color?: string;
};

export function LanguageSelect({
  data,
  currentSelected,
  onSelect,
  placeholder,
}: {
  placeholder?: string;
  data: DropDownData[];
  currentSelected: string | number | null;
  onSelect: (value: DropDownData) => void;
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
        activeColor={`rgba(${colorScheme.primary}, 0.75)`}
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
        placeholder={placeholder}
        data={data}
        value={currentSelected}
        onChange={(item) => {
          onSelect(item);
        }}
        renderItem={(item, selected) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingVertical: 8,
              paddingHorizontal: 16,
            }}>
            {item.color ? (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: item?.color,
                }}
              />
            ) : (
              <></>
            )}

            <Text
              style={{
                color: `rgb(${selected ? colorScheme.primaryForeground : colorScheme.foreground})`,
                fontSize: 14,
              }}>
              {item.label}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: `rgba(21, 24, 30, 0.8)`,
    borderRadius: 12,
    padding: 12,
    boxShadow: cardGlow("2xl"),
    elevation: 2,
    width: "100%",
    borderWidth: 2,
    borderColor: colorScheme.border,
  },
  containerStyle: {
    backgroundColor: colorScheme.card,
    borderWidth: 2,
    borderColor: colorScheme.border,
    borderRadius: 12,
    boxShadow: cardGlow("2xl"),
    zIndex: 14,
    elevation: 10,
    color: colorScheme.foreground,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: colorScheme.foreground,
  },
  item: {
    padding: 0,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: colorScheme.foreground,
    backgroundColor: colorScheme.card,
  },
  itemText: {
    color: colorScheme.foreground,
  },
});
