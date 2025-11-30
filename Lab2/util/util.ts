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
