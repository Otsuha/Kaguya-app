import React from 'react';
import {StyleSheet, View, VirtualizedList, SafeAreaView} from 'react-native';
import {KGYLibraryBook} from './KGYLibraryBook';

export const KGYLibraryPage = () => {
  const getItemCount = data => {
    return 5;
  };

  const getItem = (data, index) => {
    return '';
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: 0, height: 0}} />
      <VirtualizedList
        style={{flex: 1, flexDirection: '', flexWrap: 'wrap'}}
        //horizontal={true}
        renderItem={item => {
          return <View style={styles.item} />;
        }}
        initialNumToRender={5}
        getItemCount={getItemCount}
        getItem={getItem}
        contentContainerStyle={}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: 'green',
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
    width: 110,
    height: 140,
    margin: 10,
  },
});
