import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './book-details/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  listUrl = 'https://s3.amazonaws.com/api-fun/books.json';

  constructor(private http: HttpClient) { }

  getList(): Observable<Data> {
    return this.http.get<Data>(this.listUrl);
  }
}
