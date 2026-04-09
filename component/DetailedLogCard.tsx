import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BookLog } from "./BookStruct";

interface BookDetailProps {
  book: BookLog;
}

export default function BookDetail({ book }: BookDetailProps) {
  return (
    <ScrollView style={styles.box}>
      <View style={styles.loghead}>
        <Text style={styles.title}> {book.title} </Text>
        <Text style={styles.author}> {book.author} </Text>
      </View>

      <View style={styles.neck}>
        <Text style={styles.label}> Genre </Text>
        <Text style={styles.value}>{book.genre} </Text>

        <Text style={styles.label}> Date Added</Text>
        <Text style={styles.value}> {book.date}</Text>

        <Text style={styles.label}> Progress </Text>
        <Text style={styles.value}>
          Page {book.current} out of {book.pages}{" "}
        </Text>

        <Text style={styles.label}> Status </Text>
        <Text style={styles.value}> {book.status} </Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.label}> Summary </Text>
        <Text style={styles.summary}> {book.summary}</Text>

        <Text style={styles.label}>Notes</Text>
        <Text style={styles.notes}> {book.notes}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#f7f3ee",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#a6500fcf",
  },
  author: {
    fontSize: 16,
    color: "#d7a992",
    marginTop: 4,
  },
  loghead: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0D8CC",
    paddingBottom: 12,
  },
  neck: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0D8CC",
    paddingBottom: 12,
  },
  label: {
    fontSize: 11,
    color: "#0e0b0b",
    marginTop: 10,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 15,
    color: "#0e0b0b",
    marginTop: 2,
  },
  body: {
    marginBottom: 20,
  },
  summary: {
    fontSize: 16,
    color: "#0e0b0b",
    marginTop: 4,
    lineHeight: 16,
  },
  notes: {
    fontSize: 16,
    color: "#0e0b0b",
    marginTop: 4,
    lineHeight: 16,
  },
});
