import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repetition-field',
  templateUrl: './repetition-field.component.html',
  styleUrls: ['./repetition-field.component.css']
})
export class RepetitionFieldComponent implements OnInit {

  showAddButton: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
