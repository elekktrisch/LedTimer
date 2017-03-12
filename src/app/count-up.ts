import {Display} from "./display";
import * as moment from "moment";

export class CountUp extends Display {

  targetTimeString: string = "00:10";
  targetTimestamp: any;

  constructor(modeDisplay) {
    super(modeDisplay);
    this.running = false;
    this.active = true;
    this.colonVisible = true;
    this.supportsStartStop = true;
  }

  updateSpecificSettings(settings: any) {
    this.targetTimeString = settings.cuntUpGoal;
  }

  time1DuringCountdown(): string {
    return "00";
  }

  time2DuringCountdown(): string {
    return "00";
  }

  tick(): void {
    if (!this.targetTimestamp) {
      let targetTimeDiff = moment("2000-01-01T00:" + this.targetTimeString).diff(moment("2000-01-01T00:00:00"));
      this.targetTimestamp = moment().add(moment.duration(targetTimeDiff).asMilliseconds(), 'milliseconds');
    }
    if (this.running) {
      setTimeout(() => {
        let diff = moment().diff(this.startTime);
        let now = moment.utc(diff);
        this.time1 = now.format("mm");
        this.time2 = now.format("ss");
        if (this.targetTimestamp.diff(moment()).valueOf() < 0) {
          this.finishWorkout();
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
