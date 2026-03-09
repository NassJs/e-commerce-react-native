import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

import books from "../../data/books";

export default function BookDetailScreen() {

  const { id } = useLocalSearchParams();
  const router = useRouter();

  const book = books.find((b) => b.id === id);

  if (!book) {
    return <Text>Livre introuvable</Text>;
  }

  return (

    <>
      <Stack.Screen options={{ title: book.title }} />

      <ScrollView style={styles.container}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Retour</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: book.cover }}
          style={styles.image}
        />

        <Text style={styles.title}>{book.title}</Text>

        <Text>Auteur : {book.author}</Text>
        <Text>Genre : {book.genre}</Text>
        <Text>Année : {book.year}</Text>

        <Text style={styles.synopsis}>
          {book.synopsis}
        </Text>

      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({

container:{
padding:20
},

backButton:{
marginBottom:10
},

backText:{
fontSize:16,
color:"#007AFF"
},

image:{
width:200,
height:300,
alignSelf:"center",
marginBottom:20
},

title:{
fontSize:24,
fontWeight:"bold",
marginBottom:10
},

synopsis:{
marginTop:20,
fontSize:16,
lineHeight:24
}

});