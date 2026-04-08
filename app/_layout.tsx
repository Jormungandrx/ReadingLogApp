import { Tabs } from "expo-router";
import { MiddlemanProvider } from "./component/Middleman";

export default function TabLayout() {
  return (
    <MiddlemanProvider>
      <Tabs>
        <Tabs.Screen name="home" options={{ title: "Home" }} />
        <Tabs.Screen name="logs" options={{ title: "My Logs" }} />
        <Tabs.Screen name="form" options={{ title: "Add Logs" }} />
        <Tabs.Screen name="calendar" options={{ title: "Calendar" }} />
      </Tabs>
    </MiddlemanProvider>
  );
}
