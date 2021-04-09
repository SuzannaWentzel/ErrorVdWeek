import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {
  @Input() errors: object[] = [];
  public error: object;
  public addingNew: boolean = false;

  constructor(public activeModal: NgbActiveModal) {
    this.error = {
      'type' : "",
      'message' : ""
    };
  }

  ngOnInit(): void {
    console.log(this.errors);
  }

  toggleAddingMode() {
    this.addingNew = !this.addingNew;
  }

  addNewError() {
    // add the new error

    // close with returning something to let parent component
    // know that it should reload
    this.activeModal.close(this.error);
  }

  registerEncounter() {
    // register that error has been encountered

    // close with returning something to let parent component
    // know that it should reload
    this.activeModal.close(this.error);
  }

}
