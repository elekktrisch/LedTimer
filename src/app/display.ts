import * as moment from "moment";
import {Beeper} from "./beeper";

const BEEPER = new Beeper();

export abstract class Display {

  beeper: Beeper = BEEPER;
  countdownDurationSeconds: number = 10;
  mode: string;
  modeDisplay: string;
  time1: string;
  time2: string;
  colonVisible: boolean;
  active: boolean;
  running: boolean;
  pristine: boolean = true;
  countingDown: boolean = false;
  supportsStartStop: boolean;
  startTime;
  countdownTargetTime;

  constructor(modeDisplay) {
    this.modeDisplay = modeDisplay;
  }

  updateSettings(settings: any) {
    if(settings) {
      this.countdownDurationSeconds = parseInt(settings.startCountdownSeconds);
      this.updateSpecificSettings(settings);
    }
  }

  abstract updateSpecificSettings(settings: any);

  defaultSettings(): any {
    return {
      startCountdownSeconds: 10,
      countUpGoal: "12:00",
      countDownGoal: "12:00",
      workDuration: "00:20",
      breakDuration: "00:10",
      numberOfRounds: "8",
    }
  }

  start() {
    this.reset();
    this.pristine = false;
    if (!this.countingDown && !this.running) {
      if (this.supportsStartStop) {
        this.countdownTargetTime = moment().add(this.countdownDurationSeconds, 'seconds');
        this.countingDown = true;
        this.running = false;
        this.tickCountdown();
      } else {
        this.startWorkout();
      }
    }
  }

  tickCountdown(): void {
    this.time1 = this.time1DuringCountdown();
    this.time2 = this.time2DuringCountdown();
    if (this.countingDown) {
      setTimeout(() => {
        this.active = true;
        let diff = this.countdownTargetTime.diff(moment());
        if (diff.valueOf() < 0) {
          this.beeper.startBeep();
          this.mode = this.modeDisplay;
          this.startWorkout();
        } else {
          let nextMode = moment.utc(moment.duration(diff).asMilliseconds() + 990).format("ss");
          if (nextMode !== this.mode) {
            this.mode = nextMode;
            if (diff.valueOf() <= 3100 && diff.valueOf() > 0) {
              this.beeper.countdownBeep();
            }
          }
          this.tickCountdown();
        }
      }, 213);
    }
  }

  startWorkout(): void {
    if (!this.running) {
      this.startTime = moment();
      this.running = true;
      this.countingDown = false;
      this.tick();
    }
  }

  finishWorkout(): void {
    this.running = false;
    this.countingDown = false;
    this.colonVisible = true;
    this.beeper.finishBeep()
  }

  abstract time1DuringCountdown(): string;

  abstract time2DuringCountdown(): string;

  abstract tick(): void;

  stop() {
    if (this.running || this.countingDown) {
      this.running = false;
      this.countingDown = false;
      this.colonVisible = false;
    }
  }

  private leftPad(string): string {
    var str = "" + string;
    var pad = "00";

    return pad.substring(0, pad.length - str.length) + str;
  }

  abstract modeForReset(): string;

  abstract time1ForReset(): string;

  abstract time2ForReset(): string;

  reset(): void {
    this.mode = this.modeForReset();
    this.time1 = this.time1ForReset();
    this.time2 = this.time2ForReset();
    this.pristine = true;
    this.colonVisible = true;
  }

}
