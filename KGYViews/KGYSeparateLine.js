import React from 'react';
import {View, StyleSheet} from 'react-native';

export const KGYSeparateLine = ({...props}) => {
  return <View style={[styles.line, props.style]}></View>;
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#FBFBFB',
    height: 1,
  },
});