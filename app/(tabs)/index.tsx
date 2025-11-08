import Header from "@/components/Header";
import { COLOR } from "@/constants/color";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[COLOR.background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home</Text>
        <View style={{ height: 20 }} />
        <View style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
            }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Rijsttafel</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 15,
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: "75%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "25%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    color: COLOR.primary,
    textShadowColor: COLOR.primary,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
