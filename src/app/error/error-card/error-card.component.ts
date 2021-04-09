import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {
  @Input() error: object = {};
  @Output() select: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.error);
  }

  selectCard() {
    this.select.emit(this.error);
  }

}
