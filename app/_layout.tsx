import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="recipe" options={{ title: "Recipes" }} />
          <Stack.Screen name="about" options={{ title: "About Us" }} />
          <Stack.Screen
            name="recipe/[recipeId]"
            options={{ title: "Recipe Details" }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
