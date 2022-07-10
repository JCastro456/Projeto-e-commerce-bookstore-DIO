import { Component, OnInit } from '@angular/core';
import { Filter } from './model/Filter';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css'],
})
export class BookstoreAppComponent implements OnInit {
  filter: Filter | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}

  addFilter(filter: Filter) {
    this.filter = filter;
  }
}
