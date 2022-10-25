import { Book } from 'src/app/model/book';
export class BookCopy {
  public id: number | undefined;
    constructor(
        public book:Book,
        public creationDate: Date
    ){}
}
