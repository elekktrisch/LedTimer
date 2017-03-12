import {Display} from "./display";
import * as moment from "moment";


export class Rounds extends Display {

  roundDuration: string = "00:30";
  targetTimestamp: any;
  rounds: number = 8;
  currentRound: number = 1;

  constructor(modeDisplay) {
    super(modeDisplay);
    this.running = false;
    this.active = true;
    this.colonVisible = true;
    this.supportsStartStop = true;
  }

  updateSpecificSettings(settings: any) {
    this.rounds = settings.numberOfRounds;
    this.roundDuration = settings.workDuration;
  }

  time1DuringCountdown(): string {
    return this.roundDuration.substring(0, 2);
  }

  time2DuringCountdown(): string {
    return this.roundDuration.substring(3);
  }

  tick(): void {
    if (!this.targetTimestamp) {
      this.mode = "A" + this.currentRound;
      let startTimeDiff = moment("2000-01-01T00:" + this.roundDuration).diff(moment("2000-01-01T00:00:00"));
      this.targetTimestamp = moment().add(moment.duration(startTimeDiff).asMilliseconds() + 990, 'milliseconds');
    }
    if (this.running) {
      setTimeout(() => {
        let diff = this.targetTimestamp.diff(moment());
        let currentTimeDisplay = moment.utc(moment.duration(diff).asMilliseconds());
        this.time1 = currentTimeDisplay.format("mm");
        this.time2 = currentTimeDisplay.format("ss");
        if (this.time1 == "00" && this.time2 == "00") {
          if (this.currentRound >= this.rounds) {
            this.finishWorkout();
          } else {
            this.beeper.startBeep();
            this.currentRound = this.currentRound + 1;
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
