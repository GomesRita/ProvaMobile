import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.titulo}>Divertidamente 2</Text>
          <Text style={styles.text}>Diretor: Kelsey Mann</Text>
          <Text style={styles.text}>Gênero: Animação </Text>
          <Text style={styles.text}>Ano:  2024</Text>
          <Image style={styles.image} source={require('./assets/divertidamente.jpg')} ></Image>
      </View>
      <View style={styles.container}>
          <Text style={styles.titulo}>Wish: o Poder dos Desejos</Text>
          <Text style={styles.text}>Diretor: Chris Buck, Fawn Veerasunthorn </Text>
          <Text style={styles.text}>Gênero: Animação </Text>
          <Text style={styles.text}>Ano:  2023</Text>
          <Image style={styles.image} source={require('./assets/wish.jpeg')} ></Image>
      </View>
      <View style={styles.container}>
          <Text style={styles.titulo}>Elementos</Text>
          <Text style={styles.text}>Diretor: Peter Sohn</Text>
          <Text style={styles.text}>Gênero: Animação </Text>
          <Text style={styles.text}>Ano:  2023</Text>
          <Image style={styles.image} source={require('./assets/elementos.jpeg')} ></Image>
      </View>
      <View style={styles.container}>
          <Text style={styles.titulo}>A pequena sereia</Text>
          <Text style={styles.text}>Diretor: Rob Marshall</Text>
          <Text style={styles.text}>Gênero: Animação </Text>
          <Text style={styles.text}>Ano:  2023</Text>
          <Image style={styles.image} source={require('./assets/pequena.jpeg')} ></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f8fa',
    width: 300,
    height: 200,
    borderRadius: 20,
    marginBottom: 20
  },
  image:{
    width: 250,
    height: 400,
    borderRadius: 20
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text:{
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginBottom: 5
  }
  
});
