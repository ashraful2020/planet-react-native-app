import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Text from "./src/components/Text/Text";
import Home from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";
import Details from "./src/screens/Details";
const Stack = createNativeStackNavigator();

export default function App() {
  //  External font in React native
  const [loaded] = useFonts({
    gloria: require("./assets/fonts/GloriaHallelujah-Regular.ttf"),
    league: require("./assets/fonts/LeagueGothic-Regular-VariableFont_wdth.ttf"),
    sansBold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
  });
  if (!loaded) {
    return <Text> Loading....</Text>;
  }
  //
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Ashraful" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
