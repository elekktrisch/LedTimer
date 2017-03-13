import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Beeper} from '../beeper';
import {Mode} from '../modes';
import * as moment from "moment";

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

  countUpGoalSeconds = 12 * 60;
  countDownGoalSeconds = 12 * 60;
  workDurationSeconds = 20;
  breakDurationSeconds = 10;

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

  countUpGoalSecondsChanged(): void {
    this.selectedMode.settings.countUpGoal = moment.utc(this.countUpGoalSeconds * 1000).format("mm:ss");
  }

  countDownGoalSecondsChanged(): void {
    this.selectedMode.settings.countDownGoal = moment.utc(this.countDownGoalSeconds * 1000).format("mm:ss");
  }

  workDurationSecondsChanged(): void {
    this.selectedMode.settings.workDuration = moment.utc(this.workDurationSeconds * 1000).format("mm:ss");
  }

  breakDurationSecondsChanged(): void {
    this.selectedMode.settings.breakDuration = moment.utc(this.breakDurationSeconds * 1000).format("mm:ss");
  }

}
