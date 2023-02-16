import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import {KGYLibraryBook} from './KGYLibraryBook';
import {KGYBookStore} from '../KGYModels/KGYBookStore';

const bookStore = new KGYBookStore();

export const KGYLibraryPage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={[{title: '书名'}, {title: '书名2'}]}
        renderItem={item => {
          return (
            <View style={styles.container}>
              <KGYLibraryBook style={{backgroundColor: 'yellow'}} />
              <KGYLibraryBook style={{backgroundColor: 'blue'}} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 40,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  item: {
    //paddingHorizontal: 8,
    //paddingVertical: 6,
    //borderRadius: 4,
    backgroundColor: 'red',
    //alignSelf: "flex-start",
    //marginHorizontal: "1%",
    //marginBottom: 6,
    //minWidth: "48%",
    //textAlign: "center",
    //height: 140,
    //margin: 10,
  },
});
