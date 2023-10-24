import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainTextOne}>1</Text>
      {/* <Text style={styles.mainTextTwo}>2</Text>
      <Text style={styles.mainTextThree}>3</Text> */}
      {/* <View style={{ width: 50, height: 50, backgroundColor: "purple" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "aqua" }} />
      <View style={{ width: 150, height: 150, backgroundColor: "blue" }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    borderRadius: 20,
    // alignItems: "flex-start", //yatay hizalama
    // flexDirection: "row",
    // justifyContent: "flex-start",
    height: 400,
  },
  mainTextOne: {
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // alignSelf: "flex-start",
    // flex: 4,
    // marginHorizontal: 30,
    // marginVertical: 30,
    // paddingHorizontal: 20,
    // paddingVertical: 20,
  },
  //   mainTextTwo: {
  //     borderWidth: 2,
  //     borderColor: "red",
  //     margin: 10,
  //     padding: 20,
  //     borderRadius: 10,
  //     // right: 10,
  //     // bottom: 10, //asagıdaki blokla arası 10 birim acılır
  //     // left: 10,
  //     // top: 10, //yukarıdaki blokla arası 10 birim acılır
  //     // flex: 5,
  //   },
  //   mainTextThree: {
  //     borderWidth: 2,
  //     borderColor: "red",
  //     margin: 10,
  //     padding: 20,
  //     borderRadius: 10,
  //     // sflex: 1,
  //   },
});
