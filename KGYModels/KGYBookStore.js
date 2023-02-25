import {action, computed, makeObservable, observable} from 'mobx';
import FS from 'react-native-fs';

export class KGYBookStore {
  books = [];

  constructor() {
    makeObservable(this, {
      books: observable,
      getRecentBook: computed,
      otherReadingBooks: computed,
      addBook: action,
      getLibraryBooks: computed,
    });
  }

  addBook(book) {
    this.books.push(book);
  }

  get getRecentBook() {
    if (this.books.length <= 0) {
      return [];
    } else {
      let result = [];
      result.push(this.books.at(0));
      return result;
    }
  }

  get otherReadingBooks() {
    let result = [];
    for (let i = 0; i < this.books.length; ++i) {
      if (i !== 0) {
        result.push(this.books[i]);
      }
    }
    return result;
  }

  get getLibraryBooks() {
    let result = [];
    let cache = [];
    for (let i = 0; i < this.books.length + 1; ++i) {
      if (i % 2 == 0) {
        cache.push(this.books[i]);
      } else {
        cache.push(this.books[i]);
        result.push(cache);
        cache = [];
      }
    }
    return result;
  }
}
