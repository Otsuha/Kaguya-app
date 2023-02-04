import {action, computed, makeObservable, observable} from 'mobx';

export class KGYBookStore {
  books = [];

  constructor() {
    makeObservable(this, {
      books: observable,
      getRecentBook: computed,
      otherReadingBooks: computed,
      addBook: action,
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
}
