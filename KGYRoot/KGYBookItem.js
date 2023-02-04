import React, {useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export const KGYBookItem = item => {
  return (
    <View style={readingContainerStyles.container}>
      <View style={readingContainerStyles.readingIcon} />
      <View style={readingContainerStyles.titleAndTimeTextContainer}>
        <Text style={readingContainerStyles.title}>图书标题</Text>
        <Text style={readingContainerStyles.time}>刚刚</Text>
      </View>
      <Pressable style={readingContainerStyles.continueButton}>
        <Text style={readingContainerStyles.continueButtonText}>继续</Text>
      </Pressable>
    </View>
  );
};

const readingContainerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 0,
  },
  readingIcon: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    width: 60,
    height: 90,
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
