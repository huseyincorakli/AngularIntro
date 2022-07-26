import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor() {}

  customers: Customer[] = [];
  selectedCustomer:Customer|undefined;
  @Input() city:string|undefined;

  ngOnInit(): void {
    this.customers = [
      { _id: 1, _firstName: 'Ali', _age: 22, _lastName: 'Veli' },
      { _id: 2, _firstName: 'Veli', _age: 23, _lastName: 'Selman' },
      { _id: 3, _firstName: 'Osman ', _age: 25, _lastName: 'Çabuk' },
    ];
  }
  selectCustomer(customer: Customer) {
    
    this.selectedCustomer=customer;
  }
}
