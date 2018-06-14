import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() priceSlideEnd: EventEmitter<any>;
  public min = 0;
  public max = 10000;
  @Input() initPrice;

  constructor() {
    this.priceSlideEnd = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.initPrice);
  }

  public onPriceSlideEndHandler(ev): void {
    this.priceSlideEnd.emit(ev.value);
  }

}
