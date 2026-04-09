import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { BookLog } from "./BookStruct";

interface BookCardProps {
  book: BookLog;
  onPress: () => void;
}

export default function BookCard({ book, onPress }: BookCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}> {book.title} </Text>
      <Text style={styles.author}> {book.author} </Text>
      <Text style={styles.status}> {book.status} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f7f3ee",
    padding : 16,
    marginBottom: 10,
    borderBottomWidth : 1,
    borderBottomColor: "#E0D8CC",

  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color : "#8b4513",
  },
  author: {
    fontSize: 16,
    color: "rgb(234, 161, 134)",
    marginTop : 2,
  },
  status: {
    fontSize: 14,
    color : "rgba(251, 29, 0, 0.33)",
    marginTop: 4,
  },
});
