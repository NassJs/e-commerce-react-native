import { Product } from "@/data/products";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Card: React.FC<{ product: Product; onPress?: () => void }> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>Description  : {product.description}</Text>
        <Text>Image : {product.image}</Text>
        <Text>Prix : {product.price} €</Text>
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

export default Card;