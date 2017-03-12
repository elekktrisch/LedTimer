import {Display} from "./Display";
import * as moment from "moment";

export class Stopwatch implements Display {

  mode: string;
  time1: string;
  time2: string;
  colonVisible: boolean;
  active: boolean;
  running = false;
  startTime;

  start() {
    this.reset();
    if (!this.running) {
      this.startTime = moment();
      this.running = true;
      this.tick();
    }
  }

  reset(): void {
    this.mode = '00';
    this.time1 = '00';
    this.time2 = '00';
    this.active = true;
    this.colonVisible = true;
    this.running = false;
  }

  private tick(): void {
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
