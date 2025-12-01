import { CreditCardInfo } from "@/app";
import { DropDownData } from "@/components/dropdown";
import { Dispatch, SetStateAction } from "react";

export type Vendor =
  | "amex"
  | "dinersclub"
  | "discover"
  | "jcb"
  | "mastercard"
  | "troy"
  | "unionpay"
  | "visa";

//https://moneytips.com/credit/credit-cards/basics/anatomy-of-a-credit-card/
export function getCreditCardVendor(cardnumber: string): Vendor {
  // Mastercard: 5
  if (cardnumber.startsWith("5")) return "mastercard";

  // American express: 34 or 37
  if (cardnumber.startsWith("34") || cardnumber.startsWith("37")) return "amex";

  // Discover: 6
  if (cardnumber.startsWith("6011") || cardnumber.startsWith("65")) return "discover";

  // Diners: 30, 36 or 38
  if (cardnumber.startsWith("30") || cardnumber.startsWith("36") || cardnumber.startsWith("38"))
    return "dinersclub";

  // JCB: 3528-3589
  if (cardnumber.length >= 4) {
    const prefix = Number.parseInt(cardnumber.slice(0, 4));
    if (!Number.isNaN(prefix) && prefix >= 3528 && prefix <= 3589) return "jcb";
  }

  // Unionpay: 62
  if (cardnumber.startsWith("62")) return "unionpay";

  if (cardnumber.startsWith("9792")) return "troy";

  // Visa: 4 but also default
  return "visa";
}

export function GetMonths(): DropDownData[] {
  return Array.from({ length: 12 }, (_, i) => {
    const month = String(i + 1).padStart(2, "0");
    return { label: month, value: month };
  });
}

export function GetYears(range = 11, startYear = new Date().getFullYear()): DropDownData[] {
  return Array.from({ length: range }, (_, i) => {
    const year = String(startYear + i);
    return { label: year, value: year.replace("20", "") };
  });
}

export function FormatDisplayStrings(raw: string, vendor: Vendor): string {
  const format = vendor === "amex" ? "#### ###### #####" : "#### #### #### ####";
  const groupMasks = format.split(" ");
  const groupLens = groupMasks.map((g) => g.length);
  const totalLen = groupLens.reduce((a, b) => a + b, 0);

  const digits = raw.replace(/\s/g, "").slice(0, totalLen);

  const lastVisible = vendor === "amex" ? 3 : 4;
  const groups: string[] = [];

  let cursor = 0;
  for (let gi = 0; gi < groupLens.length; gi++) {
    const gLen = groupLens[gi];
    let groupStr = "";

    for (let i = 0; i < gLen; i++) {
      const globalIndex = cursor + i;
      const char = globalIndex < digits.length ? digits[globalIndex] : null;

      if (gi === 0) {
        // First group: show typed digits, placeholders for the rest
        groupStr += char ?? "#";
      } else if (gi === groupLens.length - 1) {
        // Last group: show last `lastVisible` digits if typed, earlier positions masked if typed
        const visibleStartIndex = gLen - lastVisible;
        if (i >= visibleStartIndex) {
          // visible tail
          groupStr += char ?? "#";
        } else {
          groupStr += char ? "*" : "#";
        }
      } else {
        // Middle groups: mask typed digits, placeholders for the rest
        groupStr += char ? "*" : "#";
      }
    }

    groups.push(groupStr);
    cursor += gLen;
  }

  return groups.join(" ");
}

/*
  Normal cards: #### #### #### ####
  Amex cards: #### ###### #####
*/

export function onNumberInputChange(
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
