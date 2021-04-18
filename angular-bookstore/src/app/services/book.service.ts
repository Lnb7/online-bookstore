import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common/book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";

  constructor(private httpclient: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpclient.get<getResponceBook>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    )
  }

}

interface getResponceBook{
  _embedded:{
    books: Book[];
  }
}
