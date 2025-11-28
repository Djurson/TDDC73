import { CardBackgroundImages, CardManufacturer } from "@/util/images";
import { styles } from "@/util/styles";
import { Image, ImageBackground } from "expo-image";
import { StyleSheet, Text, TextInput, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Index() {
  const imageNumber = Math.floor(Math.random() * 24);

  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.cardItem}
        source={CardBackgroundImages[imageNumber]}
        contentFit="fill"
        placeholder={blurhash}>
        <View style={styles.cardTopRow}>
          <Image
            source={require("../assets/images/card-images/chip.png")}
            style={styles.chipStyling}
            placeholder={blurhash}
          />
          <Image source={CardManufacturer[4]} />
        </View>
        <View style={styles.cardTextContainer}></View>
        {/* <View style={imagestyle.container}>
          <Image
            style={imagestyle.image}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </View> */}
      </ImageBackground>
      <View style={styles.cardForm}>
        <View style={styles.inputContainer}>
          <Text>Card Number</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Card Holder</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.dropDownContainer}></View>
      </View>
    </View>
  );
}

const imagestyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
