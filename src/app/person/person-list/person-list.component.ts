import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  constructor() {}
  person: any[] = [];
  ngOnInit(): void {
    this.person = [
      { name: 'nitesh pandey', country: 'India' },
      { name: 'johny sins', country: 'USA' },
      { name: 'rocky rifle', country: 'canada' },
      { name: 'jackie chain', country: 'china' },
      { name: 'jackma', country: 'japan' },
      { name: 'putin', country: 'russia' },
    ];
  }
}
