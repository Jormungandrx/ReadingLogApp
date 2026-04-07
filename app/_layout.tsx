import { Tabs } from "expo-router";

export default function RootLayout() {
   return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="list" options={{ title: "My Logs" }} />
      <Tabs.Screen name="form" options={{ title: "Add Logs" }} />
      <Tabs.Screen name="calendar" options={{ title: "Calendar" }} />
    </Tabs>
  );
}
