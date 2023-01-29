import React from 'react';
import {
  SafeAreaView,
  Button,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export const KGYReadingPage = () => {
  return (
    <View style={readingContainerStyles.container}>
      <View style={readingContainerStyles.readingIcon} />
      <View style={readingContainerStyles.titleAndTimeTextContainer}>
        <Text style={readingContainerStyles.title}>图书标题</Text>
        <Text style={readingContainerStyles.time}>刚刚</Text>
      </View>
      <Button style={readingContainerStyles.continueButton} title="继续" />
    </View>
  );
};

const readingContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    paddingTop: 10,
  },
  readingIcon: {
    // paddingTop: 20,
    // paddingLeft: 8,
    // paddingBottom: 20,
    margin: 10,
    width: 40,
    height: 70,
    backgroundColor: 'red',
  },
  continueButton: {
    backgroundColor: 'red',
    height: 25,
    width: 60,
  },
  titleAndTimeTextContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 0,
    height: 40,
  },
  title: {
    fontSize: 17,
    paddingTop: 0,
    paddingLeft: 0,
  },
  time: {
    fontSize: 10,
    color: 'gray',
    paddingTop: 8,
  },
});
