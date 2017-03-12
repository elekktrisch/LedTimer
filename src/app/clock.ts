import {Display} from "./display";
import * as moment from "moment";

export class Clock implements Display {

  mode: string;
  time1: string;
  time2: string;
  colonVisible = false;
  active: boolean;
  running = false;

  start() {
    if (!this.running) {
      this.running = true;
      this.tick();
    }
  }

  private tick(): void {
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

  reset(): void {
    this.mode = '88';
    this.time1 = '88';
    this.time2 = '88';
    this.active = false;
    this.colonVisible = false;
    this.start();
  }

  stop() {
    if (this.running) {
      this.running = false;
      this.active = false;
    }
  }

}
