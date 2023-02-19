import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList, Pressable, Image, Text} from 'react-native';
import {KGYLibraryBook} from './KGYLibraryBook';
import {KGYBookStore} from '../KGYModels/KGYBookStore';
import {runInAction} from 'mobx';
import {observer} from 'mobx-react';
import {KGYSeparateLine} from '../KGYViews/KGYSeparateLine';
import {KGYSortItem} from '../KGYViews/KGYSortItem';

const bookStore = new KGYBookStore();

const addLibraryBooks = () => {
  runInAction(() => {
    bookStore.addBook({
      title: '',
      imageSource: require('../Resources/Spring_实战.png'),
    });
    bookStore.addBook({
      title: '',
      imageSource: require('../Resources/大话数据结构.png'),
    });
    bookStore.addBook({
      title: '',
      imageSource: require('../Resources/见识.png'),
    });
    bookStore.addBook({
      title: '',
      imageSource: require('../Resources/C++_Primer_Plus.png'),
    });
    bookStore.addBook({
      title: '',
      imageSource: require('../Resources/浪潮之巅.png'),
    });
    bookStore.addBook({
      title: '',
      imageSource: require('../Resources/如何阅读一本书.png'),
    });
  });
};

const SingleContent = observer(({book}) => {
  return (
    <View style={styles.listMainContainer}>
      <KGYLibraryBook imageSource={book.imageSource} />
    </View>
  );
});

const MoreContent = observer(({books}) => {
  return (
    <View style={styles.listMainContainer}>
      <KGYLibraryBook imageSource={books[0].imageSource} />
      <KGYLibraryBook imageSource={books[1].imageSource} />
    </View>
  );
});

export const KGYLibraryPage = observer(() => {
  useEffect(() => {
    addLibraryBooks();
  }, []);

  const libraryBooks = bookStore.getLibraryBooks;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KGYSeparateLine style={styles.line} />
      <KGYSortItem
        style={styles.sortItem}
        imageSource={require('../Resources/sort/sort.png')}
        title={'藏书'}
      />
      <KGYSeparateLine style={styles.line} />
      <FlatList
        style={styles.list}
        data={libraryBooks.map(books => {
          return {title: '', books: books};
        })}
        renderItem={({item}) => {
          if (item.books.length > 1) {
            return <MoreContent books={item.books} />;
          } else {
            return <SingleContent book={item.books[0]} />;
          }
        }}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  sortItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  list: {
    marginBottom: 50,
  },
  listMainContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
});
