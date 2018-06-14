import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit, OnChanges {
  @Input('data') data: Array<object> = [];
  @Input('sortOptions') sortOptions?: SelectItem[];
  @Input('paginator') paginator?: boolean;
  @Input('rows') rows?: number;
  @Input('sortField') sortField?: string;
  @Input('sortOrder') sortOrder?: string;
  @Input('sortKey') sortKey?: string;

  @Output('onSortChanged') onSortChanged? = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onSortChange(event) {
    this.onSortChanged.emit(event);
  }

  quickView() {
    console.log('quick view');
  }

  addToBasket() {
    console.log('add To Basket');
  }
}
