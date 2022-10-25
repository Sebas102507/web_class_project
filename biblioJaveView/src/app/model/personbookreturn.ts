import { BookCopy } from "./book-copy";
import { Person } from "./person";

export class Personbookreturn {
  public id: number | undefined;
  constructor(
    public  returnCopy :BookCopy,
    public returnPerson:Person,
    public returnDate: Date,
  ){}


}
