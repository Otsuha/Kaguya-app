import React from 'react';
import {Pressable, Image, StyleSheet, Dimensions} from 'react-native';

export const KGYLibraryBook = () => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={require('../Resources/txt.jpg')} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 30,
  },
  image: {
    margin: 0,
    //width: (Dimensions.get('window').width - 40) / 2,
    //height: ((Dimensions.get('window').width - 40) / 2) * 1.5,
    width: 100,
    height: 100,
    //flexShrink: 0.9,
  },
});
