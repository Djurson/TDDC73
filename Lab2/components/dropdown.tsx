import { CreditCardInfo } from "@/app";
import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export type DropDownData = {
  label: string;
  value: string;
};

const DropdownComponent = ({
  value,
  setCreditCardInfo,
  type,
  data,
}: {
  value: string;
  setCreditCardInfo: Dispatch<SetStateAction<CreditCardInfo>>;
  type: "Month" | "Year";
  data: DropDownData[];
}) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={type}
      value={value}
      onChange={(item) =>
        type === "Year"
          ? setCreditCardInfo((prev) => ({ ...prev, year: item.value }))
          : setCreditCardInfo((prev) => ({ ...prev, month: item.value }))
      }
    />
  );
};

export { DropdownComponent };

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.5,
    flex: 1,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
