import { StyleSheet, Text, TextInput, View } from "react-native";
import { Dispatch, SetStateAction } from "react";
import { CreditCardInfo } from "@/app";
import DropdownComponent, { DropDownData } from "./dropdown";
import { getCreditCardVendor, Vendor } from "@/util/util";

export function CardForm({
  creditCardInfo,
  setCreditCardInfo,
}: {
  creditCardInfo: CreditCardInfo;
  setCreditCardInfo: Dispatch<SetStateAction<CreditCardInfo>>;
}) {
  const cardVendor: Vendor = getCreditCardVendor(creditCardInfo.creditCardNumber);
  return (
    <View style={styles.cardForm}>
      <View style={styles.inputContainer}>
        <Text>Card Number</Text>
        <TextInput
          style={textInputStyle.textInput}
          placeholder={"#### #### #### ####"}
          inputMode="numeric"
          maxLength={cardVendor == "amex" ? 17 : 19}
          onChangeText={(text) => numberInputChange(text, setCreditCardInfo, cardVendor)}
          value={creditCardInfo.creditCardNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Card Holder</Text>
        <TextInput
          style={textInputStyle.textInput}
          placeholder="Full name"
          onChangeText={(text) =>
            setCreditCardInfo((prev) => ({
              ...prev,
              name: text,
            }))
          }
          value={creditCardInfo.name}
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={{ flex: 4, gap: 4 }}>
          <Text>Expiration date</Text>
          <View style={styles.dropDownContainer}>
            <DropdownComponent
              type="Month"
              value={creditCardInfo.month}
              setCreditCardInfo={setCreditCardInfo}
              data={getMonths()}
            />
            <DropdownComponent
              type="Year"
              value={creditCardInfo.year}
              setCreditCardInfo={setCreditCardInfo}
              data={getYears()}
            />
          </View>
        </View>
        <View style={{ flex: 1, gap: 4 }}>
          <Text>CVV</Text>
          <TextInput
            style={textInputStyle.textInput}
            inputMode="numeric"
            maxLength={3}
            onChangeText={(text) =>
              setCreditCardInfo((prev) => ({
                ...prev,
                cvv: text,
              }))
            }
            onFocus={() =>
              setCreditCardInfo((prev) => ({
                ...prev,
                cvvFocus: true,
              }))
            }
            onBlur={() =>
              setCreditCardInfo((prev) => ({
                ...prev,
                cvvFocus: false,
              }))
            }
          />
        </View>
      </View>
    </View>
  );
}

/*
  Normal cards: #### #### #### ####
  Amex cards: #### ###### #####
*/

function numberInputChange(
  text: string,
  setCreditCardInfo: Dispatch<SetStateAction<CreditCardInfo>>,
  cardVendor: Vendor
) {
  const digits = text.replace(/\D/g, "");

  const isAmex = cardVendor == "amex";
  const maxDigits = isAmex ? 15 : 16;

  const limited = digits.slice(0, maxDigits);

  let formatted = "";

  if (isAmex) {
    const a = limited.slice(0, 4);
    const b = limited.slice(4, 10);
    const c = limited.slice(10, 15);
    formatted = [a, b, c].filter(Boolean).join(" ");
  } else {
    // groups of 4, but avoid trimming away characters
    formatted = limited.replace(/(.{4})/g, "$1 ").replace(/ $/, "");
  }

  setCreditCardInfo((prev) => ({
    ...prev,
    creditCardNumber: formatted,
  }));
}

function getMonths(): DropDownData[] {
  return Array.from({ length: 12 }, (_, i) => {
    const month = String(i + 1).padStart(2, "0");
    return { label: month, value: month };
  });
}

function getYears(range = 11, startYear = new Date().getFullYear()): DropDownData[] {
  return Array.from({ length: range }, (_, i) => {
    const year = String(startYear + i);
    return { label: year, value: year.replace("20", "") };
  });
}

const styles = StyleSheet.create({
  cardForm: {
    backgroundColor: "#fff",
    boxShadow: "0 8px 24px rgb(0,0,0,0.3)",
    height: 450,
    width: "90%",
    marginTop: -96,
    paddingTop: 120,
    borderRadius: 18,
    paddingHorizontal: 36,
    gap: 24,
    zIndex: -20,
  },
  inputContainer: {
    gap: 4,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    width: "100%",
  },
  dropDownContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});

export const textInputStyle = StyleSheet.create({
  textInput: {
    padding: 12,
    borderWidth: 0.5,
    borderColor: "gray",
    height: 50,
  },
});
