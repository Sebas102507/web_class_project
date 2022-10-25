import { Book } from './book';
import { Author } from './author';
export class Authorbybook {

  public id: number | undefined;

  constructor(
    public author:Author,
    public book:Book,
  ){}

}
