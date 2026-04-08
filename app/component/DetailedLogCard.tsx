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
  box: {},
  title: {},
  author: {},
  loghead: {},
  neck: {},
  label: {},
  value: {},
  body: {},
  summary: {},
  notes: {},
});
