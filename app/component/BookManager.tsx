import AsyncStorage from "@react-native-async-storage/async-storage";
import { BookLog } from "./BookStruct";
import bookList from "./data.json";
export class BookManager {
  private books: Map<string, BookLog> = new Map();
  maxid: number = 0;

  constructor() {
    this.loadBooks();
  }

  async loadBooks() {
    let check = await AsyncStorage.getItem("data");
    if (check == null) {
      let max = 0;
      for (let i = 0; i < bookList.length; i++) {
        const Book = new BookLog(
          bookList[i].id,
          bookList[i].title,
          bookList[i].author,
          bookList[i].pages,
          bookList[i].current,
          bookList[i].date,
          bookList[i].genre,
        );
        this.books.set(Book.id, Book);
        let num = parseInt(bookList[i].id);

        if (num > this.maxid) {
          this.maxid = num;
        }
      }
    } else {
      let toParse = JSON.parse(check);
      for (let i = 0; i < toParse.length; i++) {
        const Book = new BookLog(
          toParse[i].id,
          toParse[i].title,
          toParse[i].author,
          toParse[i].pages,
          toParse[i].current,
          toParse[i].date,
          toParse[i].genre,
        );
        this.books.set(Book.id, Book);
        let num = parseInt(toParse[i].id);

        if (num > this.maxid) {
          this.maxid = num;
        }
      }
    }
  }

  async saveBooks() {
    let toSave = [...this.books.values()];
    await AsyncStorage.setItem("data", JSON.stringify(toSave));
  }

  public add(
    Title: string,
    Author: string,
    Pages: number,
    Current: number,
    Date: string,
    Genre: string,
  ) {
    const Book = new BookLog(
      String(++this.maxid),
      Title,
      Author,
      Pages,
      Current,
      Date,
      Genre,
    );
    this.books.set(Book.id, Book);
    this.saveBooks();
  }

  public delete(Id: string) {
    this.books.delete(Id);
    this.saveBooks();
  }

  public update(
    Id: string,
    Title: string,
    Author: string,
    Pages: number,
    Current: number,
    Date: string,
    Genre: string,
  ) {
    const search = this.books.get(Id);
    if (search != null) {
      const newbook = new BookLog(
        Id,
        Title,
        Author,
        Pages,
        Current,
        Date,
        Genre,
      );
      this.books.set(Id, newbook);
      this.saveBooks();
    }
  }

  public getall(): BookLog[] {
    return [...this.books.values()];
  }

  public mostrecentlog(): BookLog | undefined {
    return this.books.get(String(this.maxid));
  }
}
