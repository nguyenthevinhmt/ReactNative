import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListPostScreen from "./src/Screens/ListPostScreen";
import AddScreen from "./src/Screens/AddScreen";
import PostDetailScreen from "./src/Screens/PostDetailScreen";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="List"
      >
        <Stack.Screen name="List" component={ListPostScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Detail" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
