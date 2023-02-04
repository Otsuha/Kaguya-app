import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

export const KGYTabBarItem = ({size, imageSource}) => {
  return (
    <Pressable style={getStyles(size).item} disabled={true}>
      <Image source={imageSource} />
    </Pressable>
  );
};

const getStyles = ({size}) => {
  const styles = StyleSheet.create({
    item: {
      height: size,
      width: size,
    },
  });
  return styles;
};
