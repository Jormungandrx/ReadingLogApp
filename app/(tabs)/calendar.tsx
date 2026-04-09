import { StyleSheet, Text, View } from "react-native";
import { useBookManager } from "../component/Middleman";

export default function Achievements() {
  const mid = useBookManager();
  const books = mid.books;
  let total = books.length;
  let totalpages = 0;
  let reading = 0;
  let finished = 0;

  for (let i = 0; i < books.length; i++) {
    totalpages += books[i].current;
  }

  for (let i = 0; i < books.length; i++) {
    if (books[i].status == "Reading") {
      reading++;
    } else {
      finished++;
      continue;
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.header}>Your Reading Achievements!</Text>
      <Text style={styles.title}>Here's how many books you've read: </Text>
      <Text style={styles.number}>{total}</Text>
      <Text style={styles.title}>Here's how many pages you've read: </Text>
      <Text style={styles.number}>{totalpages}</Text>
      <Text style={styles.title}>
        This is the amount of books you're currently reading:{" "}
      </Text>
      <Text style={styles.number}>{reading}</Text>
      <Text style={styles.title}>
        This is the amount of books you've finished
      </Text>
      <Text style={styles.number}>{finished}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#020101",
    marginBottom: 20,
  },
  body: {
    backgroundColor: "#f7f3ee",
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: "#020101",
    textTransform: "uppercase",
    marginTop: 20,
  },

  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f40000",
    marginTop: 4,
  },
});
