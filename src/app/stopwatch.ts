import {Display} from "./display";
import * as moment from "moment";

export class Stopwatch extends Display {

  constructor(modeDisplay) {
    super(modeDisplay);
    this.running = false;
    this.active = true;
    this.colonVisible = true;
    this.supportsStartStop = true;
    this.countdownDurationSeconds = 0;
  }

  updateSpecificSettings(settings: any) {
  }

  time1DuringCountdown(): string {
    return "00";
  }

  time2DuringCountdown(): string {
    return "00";
  }

  tick(): void {
    if (this.running) {
      setTimeout(() => {
        let diff = moment().diff(this.startTime);
        let now = moment.utc(diff);
        this.mode = now.format("mm");
        this.time1 = now.format("ss");
        this.time2 = now.format("SS");
        this.colonVisible = diff % 1000 > 500;
        this.tick();
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
