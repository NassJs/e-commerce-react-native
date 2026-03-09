import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BookCard from "../../components/BookCard";
import books from "../../data/books";

export default function HomeScreen() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Ma Bibliothèque</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            book={item}
            onPress={() =>
              router.push({
                pathname: "/book/[id]",
                params: { id: item.id }
              })
            }
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  }
});