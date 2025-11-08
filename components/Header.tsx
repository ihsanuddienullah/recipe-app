import { COLOR } from "@/constants/color";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  btnBack?: boolean;
}

const Header = ({ btnBack = false }: HeaderProps) => {
  const router = useRouter();

  return (
    <View
      style={{
        ...styles.header,
        ...(btnBack
          ? { justifyContent: "space-between" }
          : { justifyContent: "center" }),
      }}
    >
      {btnBack && (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLOR.active} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>Recipe App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLOR.primary,
    letterSpacing: 2,
  },
});
