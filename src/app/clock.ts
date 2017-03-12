import {Display} from "./display";
import * as moment from "moment";

export class Clock extends Display {

  constructor(modeDisplay) {
    super(modeDisplay);
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

  modeForReset(): string {
    return "88";
  }

  time1ForReset(): string {
    return "88";
  }

  time2ForReset(): string {
    return "88";
  }

}
