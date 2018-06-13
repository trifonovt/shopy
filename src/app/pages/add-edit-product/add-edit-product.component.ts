import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  addEditProductForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addEditProductForm = fb.group({
      title: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
      price: [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(1000000)])],
      category: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.addEditProductForm.value);
  }

}
