import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Book } from "../types";

interface BookCardProps {
  book: Book;
  onPress?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: book.cover }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{book.title}</Text>
        <Text>Auteur : {book.author}</Text>
        <Text>Genre : {book.genre}</Text>
        <Text>Année : {book.year}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },

  image: {
    width: 60,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
  },

  info: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default BookCard;