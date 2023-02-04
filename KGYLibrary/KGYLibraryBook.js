import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

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
    padding: 0,
  },
  image: {
    margin: 0,
    width: 110,
    height: 140,
  },
});
