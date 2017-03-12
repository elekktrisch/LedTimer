import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Beeper} from '../beeper';
import {MODES, Mode} from '../modes';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.css']
})
export class ModeSelectorComponent implements OnInit {

  modes: Array<Mode> = MODES;
  selectedMode: Mode;
  modesMenuVisible: boolean = false;
  
  @Output()
  modeSelectionChanged: EventEmitter<Mode> = new EventEmitter<Mode>();

  constructor(private beeper: Beeper) {
  }

  ngOnInit() {
    this.selectedMode = this.modes[0];
  }

  selectMode(mode) {
    this.beeper.buttonBeep();
    this.selectedMode = mode;
    this.modesMenuVisible = false;
    this.modeSelectionChanged.emit(this.selectedMode);
  }

  toggleDropdown() {
    this.beeper.buttonBeep();
    this.modesMenuVisible = !this.modesMenuVisible;
  }

}
