import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ana Sayfa</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate("Kurslarım")}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate("KursBilgilerim")}
      />
      <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate("Sayac")}
      />
      <Button
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate("Kutu Uygulaması")}
      />
      <Button
        title="Renk Degistir"
        onPress={() => navigation.navigate("Renk Degistir")}
      />
      <Button
        title="Şifre Ekranı"
        onPress={() => navigation.navigate("Şifre Ekranı")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
