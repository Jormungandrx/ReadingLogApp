import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { useBookManager } from "../../component/Middleman";

export default function form() {
  const middleman = useBookManager();
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [pages, setpages] = useState("");
  const [current, setcurr] = useState("");
  const [date, setdate] = useState("");
  const [genre, setgen] = useState("");
  const [notes, setnote] = useState("");
  const [summary, setsum] = useState("");
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  function submit() {
    seterror("");
    setsuccess("");

    if (
      title == "" ||
      author == "" ||
      pages == "" ||
      date == "" ||
      genre == ""
    ) {
      seterror("Missing inputs in some fields.");
      return;
    }

    let pagesNum = parseInt(pages);
    let currentNum = parseInt(current) || 0;

    if (isNaN(pagesNum) || pagesNum <= 0) {
      seterror("Pages can't be less than 0 or not a number!");
      return;
    }

    if (currentNum > pagesNum || currentNum < 0) {
      seterror("Current page cannot exceed total pages or be less than 0");
      return;
    }

    function protection(text: string) {
      let protect = text.trim().split(" ").filter(Boolean);
      return protect.length;
    }

    if (protection(notes) > 300) {
      seterror("Can't exceed 300 words, sorry");
      return;
    }

    if (protection(summary) > 300) {
      seterror("Can't exceed 300 words, sorry");
      return;
    }
    try {
      middleman.add(
        title,
        author,
        pagesNum,
        currentNum,
        date,
        genre,
        notes,
        summary,
      );
      settitle("");
      setauthor("");
      setpages("");
      setcurr("");
      setdate("");
      setgen("");
      setnote("");
      setsum("");
      setsuccess("Log added!");
    } catch (e: any) {
      seterror(e.message);
    }
  }

  let errormessage = null;
  let successmessage = null;

  if (error != "") {
    errormessage = <Text style={{ color: "#fa1900" }}>{error}</Text>;
  }

  if (success != "") {
    successmessage = <Text style={{ color: "#087535" }}>{success}</Text>;
  }

  return (
    <ScrollView style={styles.form}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#2c2c2c",
        }}
      >
        Add a Log
      </Text>
      {errormessage}
      {successmessage}

      <Text style={styles.text}>Title </Text>
      <TextInput
        value={title}
        onChangeText={settitle}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text style={styles.text}>Author</Text>
      <TextInput
        value={author}
        onChangeText={setauthor}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text style={styles.text}>Pages</Text>
      <TextInput
        value={pages}
        onChangeText={setpages}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text style={styles.text}>Current Page</Text>
      <TextInput
        value={current}
        onChangeText={setcurr}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text style={styles.text}>Date in format year-month-day</Text>
      <TextInput
        value={date}
        onChangeText={setdate}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text style={styles.text}>Genre </Text>
      <TextInput
        value={genre}
        onChangeText={setgen}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Text style={styles.text}>Summary</Text>
      <TextInput
        value={summary}
        onChangeText={setsum}
        multiline
        style={{ borderBottomWidth: 1, marginBottom: 10, height: 80 }}
      />

      <Text style={styles.text}>Notes</Text>
      <TextInput
        value={notes}
        onChangeText={setnote}
        multiline
        style={{ borderBottomWidth: 1, marginBottom: 20, height: 80 }}
      />

      <Button title="Submit" onPress={submit} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  form: {
    backgroundColor: "#f7f3ee",
    padding: 16,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0D8CC",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
  },
});
