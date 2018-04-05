import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopy-header',
  templateUrl: './shopy-header.component.html',
  styleUrls: ['./shopy-header.component.scss']
})
export class ShopyHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoCart() {
    this.router.navigate(['/cart']);
  }
}
