import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Beeper} from '../beeper';
import {Mode} from '../modes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  menuVisible = false;

  @Output()
  closeClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  settingsChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selectedMode: Mode;

  constructor(private beeper: Beeper) {
  }

  ngOnInit() {
  }

  selectMode(mode: Mode) {
    this.selectedMode = mode;
    this.selectedMode.settings = this.selectedMode.settings || this.selectedMode.impl.defaultSettings();
  }

  okClicked(): void {
    this.beeper.buttonBeep();
    if (this.selectMode) {
      this.settingsChanged.emit(this.selectedMode);
    }
    this.menuVisible = false;
  }

}
