import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     cardForm: {},
//     cardList: {},
//     cardItem: {},
//     cardItemSide: {},
//     cardItemFocus: {},
//     cardItemCover: {},
//     cardItemBg: {},
//     cardItemWrapper: {},
//     cardItemTop: {},
//     cardItemType: {},
//     cardItemTypeImg: {},
//     cardItemNumber: {},
// })

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardItem: {
    height: 200,
    width: "75%",
    borderRadius: 18,
    zIndex: 10,
    overflow: "hidden",
    padding: 24,
    gap: 16,
  },
  cardTopRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chipStyling: {
    zIndex: 15,
    overflow: "hidden",
    borderRadius: 2,
  },
  cardTextContainer: {
    flex: 10,
    backgroundColor: "#00ffff",
  },
  cardNumberContainer: {
    display: "flex",
    flexDirection: "row",
  },
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
  },
  inputContainer: {
    gap: 4,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#000",
    height: 36,
  },
  dropDownContainer: {
    flexDirection: "row",
  },
});
