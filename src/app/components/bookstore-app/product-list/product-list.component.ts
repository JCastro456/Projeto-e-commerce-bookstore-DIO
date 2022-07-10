import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Filter } from '../model/Filter';
import { Book } from './model/Book';
import { BookService } from 'src/app/service/book.service.';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input()
  filter: Filter | undefined = undefined;

  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getMockBooks(this.filter).subscribe((data) => {
      this.books = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bookService
      .getMockBooks(changes['filter'].currentValue)
      .subscribe((data) => {
        this.books = data;
      });
  }
}

