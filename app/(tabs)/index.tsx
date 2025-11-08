import Header from "@/components/Header";
import { COLOR } from "@/constants/color";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <LinearGradient colors={[COLOR.background, COLOR.backgroundLight]} style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home</Text>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
