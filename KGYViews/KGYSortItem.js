import React from 'react';
import {View, Image, Pressable, StyleSheet, Text} from 'react-native';

export const KGYSortItem = ({...props}) => {
  return (
    <Pressable style={[styles.mainContainer, props.style]}>
      <Image style={styles.icon} source={props.imageSource} />
      <Text style={styles.text}>{props.title}</Text>
      <Image
        style={styles.arrow}
        source={require('../Resources/sort/sort.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  arrow: {
    height: 20,
    width: 20,
    end: 10,
    position: 'absolute',
  },
});
