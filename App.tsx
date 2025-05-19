import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Text styles={styles.titulo}>Divertidamente 2</Text>
          <Text styles={styles.text}>Diretor: Kelsey Mann</Text>
          <Text styles={styles.text}>Gênero: Animação </Text>
          <Text styles={styles.text}>Ano:  2024</Text>
          <Image style={styles.image} source={require('./assets/divertidamente.jpg')} ></Image>
      </View>
      <View style={styles.container}>
          <Text styles={styles.titulo}>Wish: o Poder dos Desejos</Text>
          <Text styles={styles.text}>Diretor: Chris Buck, Fawn Veerasunthorn </Text>
          <Text styles={styles.text}>Gênero: Animação </Text>
          <Text styles={styles.text}>Ano:  2023</Text>
          <Image style={styles.image} source={require('./assets/wish.jpeg')} ></Image>
      </View>
      <View style={styles.container}>
          <Text styles={styles.titulo}>Elementos</Text>
          <Text styles={styles.text}>Diretor: Peter Sohn</Text>
          <Text styles={styles.text}>Gênero: Animação </Text>
          <Text styles={styles.text}>Ano:  2023</Text>
          <Image style={styles.image} source={require('./assets/elementos.jpeg')} ></Image>
      </View>
      <View style={styles.container}>
          <Text styles={styles.titulo}>A pequena sereia</Text>
          <Text styles={styles.text}>Diretor: Rob Marshall</Text>
          <Text styles={styles.text}>Gênero: Animação </Text>
          <Text styles={styles.text}>Ano:  2023</Text>
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
