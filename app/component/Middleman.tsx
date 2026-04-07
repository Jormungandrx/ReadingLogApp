import React, { createContext, useContext, useEffect, useState } from "react";
import { BookManager } from "./BookManager";
import { BookLog } from "./BookStruct";

interface Middleman {
  books: BookLog[];
  loaded: boolean;
  add: (
    title: string,
    author: string,
    pages: number,
    current: number,
    date: string,
    genre: string,
  ) => void;
  remove: (id: string) => void;
  update: (
    id: string,
    title: string,
    author: string,
    pages: number,
    current: number,
    date: string,
    genre: string,
  ) => void;
  mostRecentLog: () => BookLog | undefined;
}

const Middleman = createContext<Middleman | undefined>(undefined);

const managerobject = new BookManager();

export function MiddlemanProvider({ children }: { children: React.ReactNode }) {
  const [books, setBook] = useState<BookLog[]>([]);

  const [loaded, setload] = useState(false);

  useEffect(() => {
    managerobject.loadBooks().then(() => {
      setBook(managerobject.getall());
      setload(true);
    });
  }, []);

  function refresh() {
    setBook(managerobject.getall());
  }

  function add(
    Title: string,
    Author: string,
    Pages: number,
    Current: number,
    Date: string,
    Genre: string,
  ) {
    managerobject.add(Title, Author, Pages, Current, Date, Genre);
    refresh();
  }

  function remove(Id: string) {
    managerobject.delete(Id);
    refresh();
  }

  function update(
    Id: string,
    Title: string,
    Author: string,
    Pages: number,
    Current: number,
    Date: string,
    Genre: string,
  ) {
    managerobject.update(Id, Title, Author, Pages, Current, Date, Genre);
    refresh();
  }

  const mostRecentLog = () => managerobject.mostrecentlog();
  return (
    <Middleman.Provider
      value={{ books, loaded, add, remove, update, mostRecentLog }}
    >
      {children}
    </Middleman.Provider>
  );
}

export function useBookManager() {
  const context = useContext(Middleman);
  if (!context) throw new Error("can't do this, sorry");
  return context;
}
