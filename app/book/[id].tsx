import { Product } from "@/data/products";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CardProps = {
  product: Product;
  onPress?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
};

const Card: React.FC<CardProps> = ({
  product,
  onPress,
  isFavorite = false,
  onToggleFavorite,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <TouchableOpacity style={styles.favoriteButton} onPress={onToggleFavorite}>
        <Text style={styles.favoriteText}>{isFavorite ? "❤️" : "🤍"}</Text>
      </TouchableOpacity>

      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.price}>{product.price} €</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    elevation: 2,
    position: "relative",
  },

  favoriteButton: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 10,
  },

  favoriteText: {
    fontSize: 20,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },

  info: {
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },

  price: {
    fontSize: 13,
  },
});

export default Card;