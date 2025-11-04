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
          <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
          <Stack.Screen name="recipe/[recipeId]" options={{ title: "Recipe Detail" }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
