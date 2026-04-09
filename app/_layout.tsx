import { Stack } from "expo-router";
import { MiddlemanProvider } from "../component/Middleman";

export default function RootLayout() {
  return (
    <MiddlemanProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="full" options={{ title: "Logs" }} />
      </Stack>
    </MiddlemanProvider>
  );
}
