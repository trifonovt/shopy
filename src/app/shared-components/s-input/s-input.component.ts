import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 's-input',
  templateUrl: './s-input.component.html',
  styleUrls: ['./s-input.component.scss']
})
export class SInputComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() type = 'text';

  constructor() { }

  ngOnInit() {
  }

}
