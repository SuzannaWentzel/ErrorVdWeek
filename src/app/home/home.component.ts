import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../error/error-modal/error-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public errors: any[] = [];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    // example data, assumed this will be returned in descending order of encounters
    this.errors = [
      {
        'type': 'Attribute Error',
        'message': 'line 3 and some more text here, and some more undescriptive tekst',
        'encountered': [
          new Date(), 
          new Date(), 
          new Date()
        ]
      }, {
        'type': 'Syntax Error',
        'message': 'unexpected EOF while parsing',
        'encountered': [
          new Date(),
          new Date()
        ]
      }, {
        'type': 'Type Error',
        'message': 'some message here',
        'encountered': [
          new Date()
        ]
      }, {
        'type': 'Spelling Error',
        'message': 'some message here',
        'encountered': [
          new Date()
        ]
      }
    ];
  }

  async openErrorModal() {
    const modalRef = this.modalService.open(ErrorModalComponent, {
      size: 'lg',
      centered: true
    });

    modalRef.componentInstance.errors = this.errors;

    const result = await modalRef.result;
    if (result) {
      // error has been added, fetch errors again
    }
  }
}
