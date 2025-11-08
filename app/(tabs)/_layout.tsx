import { COLOR } from "@/constants/color";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR.active,
        tabBarInactiveTintColor: COLOR.inactive,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          backgroundColor: COLOR.backgroundLight,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recipe"
        options={{
          title: "Recipes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
