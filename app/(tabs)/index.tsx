import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";
import { Products } from "@/data/products";

export default function HomeScreen() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Ma Bibliothèque</Text>

      <FlatList
        data={Products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            product={item}
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