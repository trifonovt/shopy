import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit, OnChanges {

  // sortOptions: SelectItem[];
  // sortKey: string;
  // sortField: string;
  // sortOrder: number;

  @Input('data') data: Array<object> = [];

  @Output('onSortChanged') onSortChanged?: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  onSortChange(e) {
    this.onSortChanged.emit(e);
  }
  quickView() {
    console.log('quick view');
  }
  addToBasket() {
    console.log('add To Basket');
  }
}
