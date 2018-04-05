import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {
  @Input('title') title = '';
  @Input('type') type = 'button';
  @Input('className') className = '';
  @Input('disabled') disabled = false;
  @Output('onClick') onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}
