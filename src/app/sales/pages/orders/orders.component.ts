import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [],
})
export class OrdersComponent implements OnInit {
  isUppercase = true;

  constructor() {}

  ngOnInit(): void {}

  toggleUppercase() {
    this.isUppercase = !this.isUppercase;
  }
}
