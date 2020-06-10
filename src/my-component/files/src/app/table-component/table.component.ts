import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  arrayOfValue = [];

  constructor() {
    this.arrayOfValue = [{
      firstName: 'Mark',
      secondName: 'Otto',
      age: '24'
    },
    {
      firstName: 'Jacob',
      secondName: 'Thornton',
      age: '26'
    },
    {
      firstName: 'Larry',
      secondName: 'Bird',
      age: '27'
    }]
  }
}
