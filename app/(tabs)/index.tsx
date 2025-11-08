import { COLOR } from "@/constants/color";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <LinearGradient colors={[COLOR.background, COLOR.backgroundLight]} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home</Text>
        <Link href="/recipe">Go to Recipe Screen</Link>
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
    </LinearGradient>
  );
};

export default HomeScreen;
