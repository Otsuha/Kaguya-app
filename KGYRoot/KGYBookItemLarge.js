import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export const KGYBookItemLarge = item => {
  return (
    <View style={largeReadingContainerStyles.container}>
      <View style={largeReadingContainerStyles.readingIcon} />
      <View style={largeReadingContainerStyles.titleAndTimeTextContainer}>
        <Text style={largeReadingContainerStyles.title}>图书标题</Text>
        <Text style={largeReadingContainerStyles.time}>刚刚</Text>
      </View>
      <Pressable style={largeReadingContainerStyles.continueButton}>
        <Text style={largeReadingContainerStyles.continueButtonText}>继续</Text>
      </Pressable>
    </View>
  );
};

const largeReadingContainerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 0,
  },
  readingIcon: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    width: 110,
    height: 140,
    backgroundColor: 'red',
  },
  continueButton: {
    backgroundColor: 'blue',
    height: 25,
    width: 60,
    marginBottom: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  continueButtonText: {
    alignSelf: 'center',
    color: 'white',
  },
  titleAndTimeTextContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 40,
    marginTop: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 17,
    marginLeft: 10,
  },
  time: {
    fontSize: 12,
    color: 'gray',
    marginTop: 8,
    marginLeft: 10,
  },
});
