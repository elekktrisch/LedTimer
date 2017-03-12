import {Display} from "./display";
import * as moment from "moment";

export class Stopwatch extends Display {

  constructor() {
    super();
    this.running = false;
    this.supportsStartStop = true;
  }

  reset(): void {
    this.mode = '00';
    this.time1 = '00';
    this.time2 = '00';
    this.active = true;
    this.colonVisible = true;
    this.running = false;
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

  stop() {
    if (this.running) {
      this.running = false;
      this.colonVisible = false;
    }
  }

}
