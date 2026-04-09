import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import BookCard from "../component/LogCard";
import { useBookManager } from "../component/Middleman";

export default function Home() {
  const { mostRecentLog, loaded } = useBookManager();
  const router = useRouter();
  const recent = mostRecentLog();

  let message;
  if (recent == null) {
    message = <Text>Start Reading</Text>;
  } else {
    message = (
      <BookCard
        book={recent}
        onPress={() =>
          router.push({
            pathname: "/full",
            params: { id: recent.id },
          })
        }
      />
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f7f3ee" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
          color: "2c2c2c",
        }}
      >
        What you've just read:
      </Text>
      {message}
    </View>
  );
}
