interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
}

export class BookLog implements Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  current: number;
  status: string;
  date: string;
  genre: string;
  notes: string = "";
  summary: string = "";

  private GetStatus = (pages: number, current: number) => {
    if (current < pages) {
      return "Reading";
    }
    return "Finished";
  };
  constructor(
    Id: string,
    Title: string,
    Author: string,
    Pages: number,
    Current: number,
    Date: string,
    Genre: string,
  ) {
    this.id = Id;
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.current = Current;
    this.status = this.GetStatus(this.pages, this.current);
    this.date = Date;
    this.genre = Genre;
  }

  public wordCount = (text: string): number => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  public addNotes(Notes: string) {
    if (this.wordCount(Notes) > 300)
      throw new Error("Word count should not exceed 300, please and thank you");
    this.notes = Notes;
  }

  public addSummary(Summary: string) {
    if (this.wordCount(Summary) > 300)
      throw new Error("Word count should not exceed 300, please and thank you");
    this.summary = Summary;
  }
}
