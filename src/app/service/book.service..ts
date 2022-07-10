import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../components/bookstore-app/product-list/model/Book';
import { Filter } from '../components/bookstore-app/model/Filter';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:8080/api/bookstore';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  mockBooks: Book[] = [
    {
      id: 1,
      name: 'Harry Potter',
      price: 249.99,
      quantity: 4,
      category: 'Categoria D',
      img: 'img4',
    },
    {
      id: 2,
      name: 'Senhor dos Anéis',
      price: 199.99,
      quantity: 5,
      category: 'Categoria F',
      img: 'img5',
    },
    {
      id: 3,
      name: 'The Witcher',
      price: 250.49,
      quantity: 6,
      category: 'Categoria D',
      img: 'img6',
    },
    {
      id: 4,
      name: 'O Mundo de Sofia',
      price: 50.49,
      quantity: 1,
      category: 'Categoria C',
      img: 'img2',
    },
    {
      id: 5,
      name: 'Arsene Lupin',
      price: 40.49,
      quantity: 1,
      category: 'Categoria A',
      img: 'img3',
    },
    {
      id: 6,
      name: 'Sherlock Holmes',
      price: 299.99,
      quantity: 2,
      category: 'Categoria A',
      img: 'img1',
    },
  ];

  constructor(private http: HttpClient) {}

  getBooks(filter?: Filter): Observable<Book[]> {
    let params = new HttpParams();
    if (filter) {
      if (filter.title) params.set('title', filter.title);
      if (filter.from) params.set('from', filter.from);
      if (filter.to) params.set('to', filter.to);
    }
    return this.http.get<Book[]>(this.url, { params: params });
  }

  getMockBooks(filter?: Filter): Observable<Book[]> {
    let result = this.mockBooks;
    if (filter) {
      if (filter.title) {
        result = result.filter((book) =>
          book.name.toLowerCase().includes(filter.title!.toLocaleLowerCase())
        );
      }
      if (filter.from) {
        result = result.filter((book) => book.price >= filter.from!);
      }
      if (filter.to) {
        result = result.filter((book) => book.price <= filter.to!);
      }
    }
    return of(result);
  }
}
