import {Component, OnInit} from '@angular/core';
import {Beeper} from '../beeper';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.css']
})
export class ModeSelectorComponent implements OnInit {

  modes: Array<Mode> = [
    { display: "X1", label: "Clock" },
    { display: "00", label: "Stopwatch" },
    { display: "VP", label: "Count Up" },
    { display: "DN", label: "Count Down" },
    { display: "L1", label: "Tabata" },
    { display: "A1", label: "Rounds" }
  ];
  selectedMode: Mode;
  modesMenuVisible: boolean = false;

  constructor(private beeper: Beeper) {
    this.selectedMode = this.modes[0];
  }

  ngOnInit() {
  }

  selectMode(mode) {
    this.beeper.buttonBeep();
    this.selectedMode = mode;
    this.modesMenuVisible = false;
  }

  toggleDropdown() {
    this.beeper.buttonBeep();
    this.modesMenuVisible = !this.modesMenuVisible;
  }

}

interface Mode {

  display: string;
  label: string;

}
