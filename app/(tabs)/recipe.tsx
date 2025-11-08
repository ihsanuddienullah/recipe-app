import Header from "@/components/Header";
import { COLOR } from "@/constants/color";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RecipeScreen = () => {
  return (
    <LinearGradient
      colors={[COLOR.background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
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
        <View
          style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Link href="/recipe/1">Recipe 1</Link>
          <Link href="/recipe/2">Recipe 2</Link>
          <Link href="/recipe/3">Recipe 3</Link>
        </View>
      </View>
    </LinearGradient>
  );
};

export default RecipeScreen;
