import React from 'react';
import {Pressable, Image, StyleSheet, Dimensions} from 'react-native';

export const KGYLibraryBook = ({imageSource}) => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} resizeMode={'contain'} source={imageSource} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 40) / 2,
    height: ((Dimensions.get('window').width - 40) / 2) * 1.3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
