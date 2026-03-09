import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../../components/Card";
import { Products } from "@/data/products";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const foundProduct = Products.find((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const dataToDisplay = search.trim() !== "" ? (foundProduct ? [foundProduct] : []) : Products;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Bibliothèque</Text>

      <TextInput
        style={styles.input}
        placeholder="Rechercher un livre..."
        value={search}
        onChangeText={setSearch}
      />

      {search.trim() !== "" && !foundProduct ? (
        <Text style={styles.emptyText}>Aucun produit trouvé</Text>
      ) : (
        <FlatList
          data={dataToDisplay}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Card product={item} />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },

  cardWrapper: {
    width: "31%",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});