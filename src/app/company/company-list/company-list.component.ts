import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  constructor() {}
  company: any[] = [];
  ngOnInit(): void {
    this.company = [
      { name: 'HCL', country: 'USA' },
      { name: 'capgemini', country: 'UK' },
      { name: 'TCS', country: 'India' },
      { name: 'Pitney Bowes', country: 'Japan' },
      { name: 'jshdb', country: 'UjhbSA' },
      { name: 'jhbd', country: 'ukrain' },
    ];
  }
}
