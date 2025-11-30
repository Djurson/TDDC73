import { CardForm } from "@/components/cardform";
import { CreditCard } from "@/components/creditcard";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export type CreditCardInfo = {
  creditCardNumber: string;
  name: string;
  month: string;
  year: string;
  cvv: string;
  cvvFocus: boolean;
};

export default function Index() {
  const [creditCardInfo, setCreditCardInfo] = useState<CreditCardInfo>({
    creditCardNumber: "",
    name: "",
    month: "",
    year: "",
    cvv: "",
    cvvFocus: false,
  });
  // const [backgroundImage, setBackgroundImage] = useState<number>(0);

  // useEffect(() => {
  //   setBackgroundImage(Math.floor(Math.random() * 24));
  // }, []);

  return (
    <View style={styles.outerContainer}>
      <CreditCard creditCardInfo={creditCardInfo} />
      <CardForm creditCardInfo={creditCardInfo} setCreditCardInfo={setCreditCardInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
