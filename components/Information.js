import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Information({ title, imageSource, desc }) {
  return (
    <View>
      <Image style={styles.img} source={imageSource} />

      <View style={styles.descTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textDesc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
  },
  descTitle: {
    alignItems: "center", //verilen acıklamaları ortala demek
    paddingVertical: 20, //yukarıdan asagıdan araları ac demek
  },
  title: {
    fontSize: 25,
  },
  textDesc: {
    fontSize: 20,
  },
});
