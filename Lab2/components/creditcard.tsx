import { ImageBackground } from "expo-image";
import { CardBackgroundImages, CardManufacturer } from "@/util/images";
import { Text, View, Image, StyleSheet, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import { CreditCardInfo } from "@/app";
import { FormatDisplayStrings, getCreditCardVendor, Vendor } from "@/util/util";

const chipImage = require("../assets/images/card-images/chip.png");

export function CreditCard({ creditCardInfo }: { creditCardInfo: CreditCardInfo }) {
  const cardVendor = getCreditCardVendor(creditCardInfo.creditCardNumber);
  const cardVendorLogo = CardManufacturer[cardVendor];
  const [background, setBackground] = useState<number>(0);
  const chipSource = Image.resolveAssetSource(chipImage);
  const logoSource = Image.resolveAssetSource(cardVendorLogo);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setBackground(Math.floor(Math.random() * 24));
  }, []);

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: creditCardInfo.cvvFocus ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [creditCardInfo.cvvFocus]);

  const frontRotateY = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backRotateY = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  return (
    <View style={styles.cardItem}>
      {/* FRONT */}
      <Animated.View
        style={[
          styles.side,
          {
            transform: [{ perspective: 1000 }, { rotateY: frontRotateY }],
            backfaceVisibility: "hidden",
          },
        ]}>
        <ImageBackground
          style={styles.frontBg}
          // source={require("../assets/images/card-images/13.jpeg")}
          source={CardBackgroundImages[background]}
          contentFit="fill">
          <View style={styles.cardTopRow}>
            <Image
              source={chipImage}
              style={{
                width: "15%",
                aspectRatio: chipSource.width / chipSource.height,
              }}
            />
            <Image
              source={cardVendorLogo}
              style={{
                width: 50,
                aspectRatio: logoSource.width / logoSource.height,
              }}
            />
          </View>
          <View style={styles.cardTextContainer}>
            <View style={{ flexDirection: "row", gap: 14 }}>
              {FormatDisplayStrings(creditCardInfo.creditCardNumber, cardVendor)
                .split(" ")
                .map((strArr, index) => {
                  return (
                    <Text key={index} style={{ color: "white", fontSize: 18, fontWeight: 700 }}>
                      {strArr}
                    </Text>
                  );
                })}
            </View>
          </View>

          <View style={styles.bottomRow}>
            <View style={{ gap: 4 }}>
              <Text style={{ color: "#fff" }}>Card Holder</Text>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
                {creditCardInfo.name === "" ? "Full name" : creditCardInfo.name}
              </Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: "#fff" }}>Expires</Text>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
                {creditCardInfo.month || "MM"}/{creditCardInfo.year || "YY"}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>

      {/* BACK */}
      <Animated.View
        style={[
          styles.side,
          {
            transform: [{ perspective: 1000 }, { rotateY: backRotateY }],
            backfaceVisibility: "hidden",
          },
        ]}>
        <ImageBackground
          style={[{ flex: 1, transform: [{ scaleX: -1 }], paddingTop: 16, gap: 24 }]}
          // source={require("../assets/images/card-images/13.jpeg")}
          source={CardBackgroundImages[background]}
          contentFit="fill">
          <View style={{ transform: [{ scaleX: -1 }], flex: 1 }}>
            <View style={{ flex: 0.33, backgroundColor: "rgba(0, 0, 0, 1)" }} />
            <View style={{ flex: 0.5, paddingHorizontal: 12, gap: 8, marginTop: 16 }}>
              <Text style={{ color: "#fff", textAlign: "right" }}>CVV</Text>
              <Text
                style={{
                  paddingVertical: 6,
                  paddingHorizontal: 4,
                  textAlign: "right",
                  textAlignVertical: "center",
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  fontSize: 18,
                  fontWeight: 700,
                }}>
                {"*".repeat(creditCardInfo.cvv.length || 0)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingRight: 12,
                marginTop: 24,
              }}>
              <Image
                source={cardVendorLogo}
                style={{
                  flex: 0,
                  width: 65,
                  aspectRatio: logoSource.width / logoSource.height,
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    height: 200,
    width: "75%",
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
  },
  side: {
    position: "absolute",
    inset: 0,
  },
  frontBg: {
    flex: 1,
    padding: 24,
  },
  cardTopRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTextContainer: {
    flex: 2,
    justifyContent: "center",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
