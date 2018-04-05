import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {

  @Input('label') public label?: string;
  @Input('type') public type? = 'button';
  @Input('className') public className? = '';
  @Input('disabled') public disabled? = false;
  @Output('onClick') public onClick? = new EventEmitter();
  @Input('typeOfButton') public typeOfButton?: string;

  handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}
