import { Stack } from "expo-router";
import { MiddlemanProvider } from "./component/Middleman";

export default function RootLayout() {
  return (
    <MiddlemanProvider>
      <Stack.Screen name="full" options={{ title: "Logs" }} />
    </MiddlemanProvider>
  );
}
