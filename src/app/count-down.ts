import {Display} from "./display";
import * as moment from "moment";

export class CountDown extends Display {

  startTimeString: string = "00:10";
  targetTimestamp: any;

  constructor(modeDisplay) {
    super(modeDisplay);
    this.running = false;
    this.active = true;
    this.colonVisible = true;
    this.supportsStartStop = true;
  }

  updateSpecificSettings(settings: any) {
    this.startTimeString = settings.countDownGoal
  }

  time1DuringCountdown(): string {
    return this.startTimeString.substring(0, 2);
  }

  time2DuringCountdown(): string {
    return this.startTimeString.substring(3);
  }

  tick(): void {
    if(!this.targetTimestamp) {
      let startTimeDiff = moment("2000-01-01T00:" + this.startTimeString).diff(moment("2000-01-01T00:00:00"));
      this.targetTimestamp = moment().add(moment.duration(startTimeDiff).asMilliseconds(), 'milliseconds');
    }
    if (this.running) {
      setTimeout(() => {
        let diff = this.targetTimestamp.diff(moment());
        let currentTimeDisplay = moment.utc(moment.duration(diff).asMilliseconds());
        this.time1 = currentTimeDisplay.format("mm");
        this.time2 = currentTimeDisplay.format("ss");
        if(this.time1 == "00" && this.time2 == "00") {
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
