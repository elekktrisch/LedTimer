export interface Display {
  mode: string;
  time1: string;
  time2: string;
  colonVisible: boolean;
  active: boolean;
  running: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
}
