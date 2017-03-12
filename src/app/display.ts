import * as moment from "moment";
import {Beeper} from "./beeper";

export abstract class Display {

  beeper: Beeper;
  countdownDurationSeconds: number = 10;
  mode: string;
  time1: string;
  time2: string;
  colonVisible: boolean;
  active: boolean;
  running: boolean;
  countingDown: boolean = false;
  supportsStartStop: boolean;
  startTime;
  countdownTargetTime;

  constructor() {
    this.beeper = new Beeper();
  }

  start() {
    this.reset();
    if (!this.countingDown && !this.running) {
      if (this.supportsStartStop) {
        this.countdownTargetTime = moment().add(this.countdownDurationSeconds, 'seconds');
        this.tickCountdown();
      } else {
        this.startWorkout();
      }
    }
  }

  tickCountdown(): void {
    this.countingDown = true;
    this.time1 = this.time1DuringCountdown();
    this.time2 = this.time2DuringCountdown();
    if (this.countingDown) {
      setTimeout(() => {
        this.active = true;
        let diff = this.countdownTargetTime.diff(moment());
        if (diff.valueOf() <= 1000) {
          this.beeper.startBeep();
          this.startWorkout();
        } else {
          let nextMode = moment.utc(moment.duration(diff).asMilliseconds()).format("ss");
          if (nextMode !== this.mode) {
            this.mode = nextMode;
            if (diff.valueOf() <= 4800 && diff.valueOf() > 800) {
              this.beeper.countdownBeep();
            }
          }
          this.tickCountdown();
        }
      }, 50);
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

  abstract time1DuringCountdown(): string;

  abstract time2DuringCountdown(): string;

  abstract tick(): void;

  abstract stop(): void;

  abstract reset(): void;

  private leftPad(string): string {
    var str = "" + string;
    var pad = "00";

    return pad.substring(0, pad.length - str.length) + str;
  }

}
