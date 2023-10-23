import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

//autoCapitalize="none" --> otomatik olarak buyuk harfle baslamasını engeller
//autoCorrect={false} --> otomatik duzeltmeler için kelime önerisi kısmını kaldırır

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.main}>
      <Text>Şifrenizi Giriniz:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text>Şifre en az 6 karakter olmalıdır</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: "purple",
    borderWidth: 2,
    padding: 3,
  },
});
