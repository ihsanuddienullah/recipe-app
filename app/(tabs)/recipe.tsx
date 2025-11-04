import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RecipeScreen = () => {
  return (
    <View>
      <Text>RecipeScreen</Text>
      <Link href="/">Go to Home Screen</Link>
    </View>
  );
};

export default RecipeScreen;
