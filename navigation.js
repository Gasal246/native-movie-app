import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import React from "react";
import Homescreen from "./screens/Homescreen";
import MovieScreen from "./screens/MovieScreen";
import Personscreen from "./screens/Personscreen";
import Searchscreen from "./screens/Searchscreen";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Person" component={Personscreen} />
        <Stack.Screen name="Search" component={Searchscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
