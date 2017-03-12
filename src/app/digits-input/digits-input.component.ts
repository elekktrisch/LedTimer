import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-digits-input',
  templateUrl: './digits-input.component.html',
  styleUrls: ['./digits-input.component.css']
})
export class DigitsInputComponent implements OnInit {

  @Input()
  value: string = "00:00";
  
  @Input()
  blue: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
