import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public errors: any[] = [];

  constructor() {}

  ngOnInit(): void {

    // example data, assumed this will be returned in descending order of encounters
    this.errors = [
      {
        'message': 'Attribute Error: line 3 and some more text here, and some more undescriptive tekst',
        'encountered': [
          new Date(), 
          new Date(), 
          new Date()
        ]
      }, {
        'message': 'Syntax Error',
        'encountered': [
          new Date(),
          new Date()
        ]
      }, {
        'message': 'Type Error',
        'encountered': [
          new Date()
        ]
      }, {
        'message': 'Spelling Error',
        'encountered': [
          new Date()
        ]
      }
    ]
  }
}
