import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Beeper} from '../beeper';
import {MODES, Mode} from '../modes';

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
  modeSelectionChanged: EventEmitter<Mode> = new EventEmitter<Mode>();

  private selectedMode: Mode;

  constructor(private beeper: Beeper) {
  }

  ngOnInit() {
  }

  selectMode(mode: Mode) {
    this.selectedMode = mode;
  }

  okClicked(): void {
    this.beeper.buttonBeep();
    if(this.selectMode) {
      this.modeSelectionChanged.emit(this.selectedMode);
    }
    this.menuVisible = false;
  }

}
