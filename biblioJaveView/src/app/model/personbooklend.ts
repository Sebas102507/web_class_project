import { BookCopy } from './book-copy';
import { Person } from './person';
export class Personbooklend {
  public id: number | undefined;
  constructor(
    public  copy :BookCopy,
    public person:Person,
    public lendDate: Date,
    public expirationDate:Date,
  ){}



}
