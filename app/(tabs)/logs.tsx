import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import BookCard from "../../component/LogCard";
import { useBookManager } from "../../component/Middleman";

export default function logs() {
  const { books, loaded } = useBookManager();
  const router = useRouter();

  if (loaded == false) {
    return (
      <View style={{ flex: 1, padding: 20, backgroundColor: "#f7f3ee" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (books.length == 0) {
    return (
      <View style={{ flex: 1, padding: 20, backgroundColor: "#f7f3ee" }}>
        <Text>No logs available. Let's get to reading</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f7f3ee" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#2c2c2c",
        }}
      >
        My Logs
      </Text>
      <ScrollView>
        {books.map((item) => (
          <BookCard
            key={item.id}
            book={item}
            onPress={() =>
              router.push({
                pathname: "/full",
                params: { id: item.id },
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
