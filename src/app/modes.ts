import {Display} from "./display";
import {Clock} from "./clock";
import {Stopwatch} from "./stopwatch";

export const MODES: Array<Mode> = [
  { display: "X1", label: "Clock", impl: new Clock() },
  { display: "00", label: "Stopwatch", impl: new Stopwatch() },
  { display: "VP", label: "Count Up" },
  { display: "DN", label: "Count Down" },
  { display: "F1", label: "Tabata" },
  { display: "A1", label: "Rounds" },
  { display: "P1", label: "Program 1" },
  { display: "P2", label: "Program 2" },
  { display: "P3", label: "Program 3" }
];

export interface Mode {

  display: string;
  label: string;
  impl?: Display;

}
