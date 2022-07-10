import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter } from '../model/Filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output()
  filter = new EventEmitter<Filter>();

  filterForm = new FormGroup({
    title: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  filterSubmit() {
    this.filter.emit(this.filterForm.value);
  }
}