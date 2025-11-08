import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RecipeScreen = () => {
  return (
    <View>
      <Text>RecipeScreen</Text>
      <View style={{ height: 20 }} />
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Go to Detail Recipe Screen
        </Text>
        <Link href="/recipe/1">Recipe 1</Link>
        <Link href="/recipe/2">Recipe 2</Link>
        <Link href="/recipe/3">Recipe 3</Link>
    </View>
  );
};

export default RecipeScreen;
