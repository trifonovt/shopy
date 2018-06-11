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
  @Input() action: Function;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .debounceTime(250)
      .subscribe(text => this.action(text));
  }
}
