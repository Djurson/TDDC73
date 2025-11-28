import { CardBackgroundImages, CardManufacturer } from "@/util/images";
import { styles } from "@/util/styles";
import { ImageBackground } from "expo-image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  ImageResolvedAssetSource,
  ImageSourcePropType,
} from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const chipImage = require("../assets/images/card-images/chip.png");
const chipSource = getImageProps(chipImage);

export default function Index() {
  const [backgroundImage, setBackgroundImage] = useState<number>(0);
  const [creditCardNumber, setCreditCardNumber] = useState<[string[]]>([[]]);
  const [cardLogo, setCardLogo] = useState<ImageResolvedAssetSource>(
    getImageProps(CardManufacturer[2])
  );

  useEffect(() => {
    setBackgroundImage(Math.floor(Math.random() * 24));
  }, []);

  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.cardItem}
        source={CardBackgroundImages[backgroundImage]}
        contentFit="fill"
        placeholder={blurhash}>
        <View style={styles.cardTopRow}>
          <Image
            source={chipImage}
            style={
              (styles.chipStyling,
              { aspectRatio: chipSource.width / chipSource.height, width: "15%" })
            }
          />
          <Image
            source={CardManufacturer[4]}
            style={{
              aspectRatio: cardLogo.width / cardLogo.height,
              width: "20%",
              zIndex: 15,
            }}
          />
        </View>
        <View style={styles.cardTextContainer}>
          {creditCardNumber.map((strArr, _index) => {
            return (
              <View key={`${_index}`} style={{ display: "flex", flexDirection: "row", gap: 2 }}>
                {strArr.map((str, index) => {
                  return (
                    <Text key={`${_index}:${index}`} style={{ fontSize: 18, fontWeight: 500 }}>
                      {str}
                    </Text>
                  );
                })}
              </View>
            );
          })}
          <Text style={{ fontSize: 18, fontWeight: 500 }}>{"#### #### #### ####"}</Text>
        </View>
      </ImageBackground>
      <View style={styles.cardForm}>
        <View style={styles.inputContainer}>
          <Text>Card Number</Text>
          <TextInput
            style={styles.textInput}
            inputMode="numeric"
            maxLength={18}
            onChangeText={(text) => numberInputChange(text, setCreditCardNumber)}
          />
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

function getImageProps(imageString: ImageSourcePropType): ImageResolvedAssetSource {
  return Image.resolveAssetSource(imageString);
}

function numberInputChange(
  text: string,
  setCreditCardNumber: Dispatch<SetStateAction<[string[]]>>
) {
  const sanitized = text.replace(/\D/g, "");
  setCreditCardNumber([sanitized.match(/.{1,4}/g) ?? []]);
}
