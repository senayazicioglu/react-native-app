import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformationScreen from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";
import ColorChangeScreen from "./src/screens/ColorChangeScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import DesignScreen from "./src/screens/DesignScreen";
import DesignScreenExercise from "./src/screens/DesignScreenExercise";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AnaSayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarım" component={CoursesScreen} />
        <Stack.Screen
          name="KursBilgilerim"
          component={CoursesInformationScreen}
        />
        <Stack.Screen name="Sayac" component={CounterScreen} />
        <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />
        <Stack.Screen name="Renk Degistir" component={ColorChangeScreen} />
        <Stack.Screen name="Şifre Ekranı" component={PasswordScreen} />
        <Stack.Screen name="Design Ekranı" component={DesignScreen} />
        <Stack.Screen
          name="Design Ekranı Egzersiz"
          component={DesignScreenExercise}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
