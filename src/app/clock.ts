import {Display} from "./display";
import * as moment from "moment";

export class Clock extends Display {

  constructor() {
    super();
    this.colonVisible = false;
    this.running = false;
    this.supportsStartStop = false;
  }

  tick(): void {
    if (this.running) {
      setTimeout(() => {
        this.active = true;
        let now = moment();
        this.mode = 'X1';
        this.time1 = now.format("HH");
        this.time2 = now.format("mm");
        this.colonVisible = now.valueOf() % 1000 > 500;
        this.tick();
      }, 50);
    }
  }

  time1DuringCountdown(): string {
    return "00";
  }

  time2DuringCountdown(): string {
    return "00";
  }

  reset(): void {
    this.mode = '88';
    this.time1 = '88';
    this.time2 = '88';
    this.active = false;
    this.colonVisible = false;
  }

  stop() {
    if (this.running) {
      this.running = false;
      this.active = false;
    }
  }

}
