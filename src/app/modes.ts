import {Display} from "./display";
import {Clock} from "./clock";
import {Stopwatch} from "./stopwatch";
import {CountUp} from "./count-up";
import {CountDown} from "./count-down";
import {Tabata} from "./tabata";
import {Rounds} from "./rounds";

export const MODES: Array<Mode> = [
  { display: "X1", label: "Clock", impl: new Clock("X1") },
  { display: "00", label: "Stopwatch", impl: new Stopwatch("00") },
  { display: "VP", label: "Count Up", impl: new CountUp("VP") },
  { display: "DN", label: "Count Down", impl: new CountDown("DN") },
  { display: "F1", label: "Tabata", impl: new Tabata("F1") },
  { display: "r1", label: "Rounds", impl: new Rounds("r1") }
];

export interface Mode {

  display: string;
  label: string;
  impl?: Display;
  settings?: any;

}
