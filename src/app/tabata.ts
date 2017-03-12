import {Display} from "./display";
import * as moment from "moment";


const WORK: "F" = "F";
const BREAK: "L" = "L";

export class Tabata extends Display {

  workDuration: string = "00:20";
  breakDuration: string = "00:10";
  targetTimestamp: any;
  rounds: number = 8;
  currentRound: number = 1;
  currentMode: "F" | "L" = WORK;

  constructor(modeDisplay) {
    super(modeDisplay);
    this.running = false;
    this.active = true;
    this.colonVisible = true;
    this.supportsStartStop = true;
  }

  updateSpecificSettings(settings: any) {
    this.rounds = settings.numberOfRounds;
    this.workDuration = settings.workDuration;
    this.breakDuration = settings.breakDuration;
  }

  time1DuringCountdown(): string {
    return this.workDuration.substring(0, 2);
  }

  time2DuringCountdown(): string {
    return this.workDuration.substring(3);
  }

  tick(): void {
    if (!this.targetTimestamp) {
      this.mode = this.currentMode + this.currentRound;
      let startTimeDiff;
      if (this.currentMode === WORK) {
        startTimeDiff = moment("2000-01-01T00:" + this.workDuration).diff(moment("2000-01-01T00:00:00"));
      } else {
        startTimeDiff = moment("2000-01-01T00:" + this.breakDuration).diff(moment("2000-01-01T00:00:00"));
      }
      this.targetTimestamp = moment().add(moment.duration(startTimeDiff).asMilliseconds() + 990, 'milliseconds');
    }
    if (this.running) {
      setTimeout(() => {
        let diff = this.targetTimestamp.diff(moment());
        let currentTimeDisplay = moment.utc(moment.duration(diff).asMilliseconds());
        this.time1 = currentTimeDisplay.format("mm");
        let seconds = currentTimeDisplay.format("ss");
        if (this.time2 !== seconds) {
          this.time2 = seconds;
          if (this.currentMode === BREAK && diff.valueOf() <= 4100 && diff.valueOf() > 1100) {
            // this.beeper.countdownBeep();
          }
        }
        if (this.time1 == "00" && this.time2 == "00") {
          if (this.currentMode == BREAK && this.currentRound >= this.rounds) {
            this.finishWorkout();
          } else {
            if (this.currentMode === WORK) {
              this.beeper.finishBeep();
              this.currentMode = BREAK;
            } else {
              this.beeper.startBeep();
              this.currentMode = WORK;
              this.currentRound = this.currentRound + 1;
            }
            this.targetTimestamp = undefined;
            this.tick();
          }
        } else {
          this.colonVisible = diff % 1000 > 500;
          this.tick();
        }
      }, 53);
    }
  }

  modeForReset(): string {
    return this.modeDisplay;
  }

  time1ForReset(): string {
    return this.time1DuringCountdown();
  }

  time2ForReset(): string {
    return this.time2DuringCountdown();
  }

}
