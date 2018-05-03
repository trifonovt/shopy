import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/switchMap'; 
import 'rxjs/add/operator/filter'; 
import 'rxjs/add/operator/debounceTime'; 
import 'rxjs/add/operator/switch'; 
import { from } from 'rxjs/observable/from';
import { map, switchMap, mapTo, filter, catchError } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() products;
  @Output() filterProducts: EventEmitter<any> = new EventEmitter<any>();
  constructor(private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length >= 1)
      .debounceTime(250)
      .switchMap(query => this.search(query).pipe(catchError))
      .subscribe(
        (results) => {
          this.filterProducts.emit(results);
        }
      );
  }

  search(text: string) {
    return Observable.create((obs) => {
      const res = this.products.filter((p: any) => {
        return p.title.indexOf(text) > -1 || p.description.indexOf(text) > -1 || p.category.indexOf(text) > -1;
      });


      obs.next(res)
    });
  }
}
