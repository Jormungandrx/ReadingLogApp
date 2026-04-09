import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import BookDetail from "../component/DetailedLogCard";
import { useBookManager } from "../component/Middleman";

export default function full() {
  const param = useLocalSearchParams();
  const middleman = useBookManager();
  let fulllog = null;
  for (let i = 0; i < middleman.books.length; i++) {
    if (middleman.books[i].id == param.id) {
      fulllog = middleman.books[i];
    }
  }

  if (fulllog == null) {
    return (
      <View>
        <Text>Sorry didn't find this book in our database.</Text>
      </View>
    );
  }

  return <BookDetail book={fulllog} />;
}
