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
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
      <Text style={styles.status}>{book.status}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {},

  title: {},
  author: {},
  status: {},
});
