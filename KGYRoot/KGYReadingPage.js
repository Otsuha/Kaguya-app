import React, {useEffect} from 'react';
import {SafeAreaView, SectionList, Text, StyleSheet} from 'react-native';
import {KGYBookStore} from '../KGYModels/KGYBookStore';
import {runInAction} from 'mobx';
import {observer} from 'mobx-react';
import {KGYBookItemLarge} from './KGYBookItemLarge';
import {KGYBookItem} from './KGYBookItem';

const bookStore = new KGYBookStore();

export const KGYReadingPage = observer(() => {
  useEffect(() => {
    begin();
  }, []);
  return (
    <SafeAreaView>
      <SectionList
        sections={[
          {title: '', data: bookStore.getRecentBook, recent: true},
          {title: '最近阅读', data: bookStore.otherReadingBooks, recent: false},
        ]}
        renderItem={item => {
          if (item.item.recent === true) {
            return <KGYBookItemLarge value={{item}} />;
          } else {
            return <KGYBookItem value={{item}} />;
          }
        }}
        renderSectionHeader={({section}) => {
          return <Text style={listStyles.sectionText}>{section.title}</Text>;
        }}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
});

const listStyles = StyleSheet.create({
  sectionText: {
    fontSize: 17,
    marginLeft: 10,
  },
});

const begin = () => {
  runInAction(() => {
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: true});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
    bookStore.addBook({title: '图书标题', time: '刚刚', recent: false});
  });
};
