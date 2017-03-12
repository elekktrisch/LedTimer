export class Beeper {

  private synth: any;

  constructor() {
    let w: any = window;
    this.synth = new (w.AudioContext || w.webkitAudioContext)();
  }

  public buttonBeep() {
    this.beep(80, 1800, 0.2);
  }

  public countdownBeep() {
    this.beep(300, 440, 0.8);
  }

  public startBeep() {
    this.beep(600, 880, 0.8);
  }

  public finishBeep() {
    this.beep(1200, 660, 0.8);
  }

  private beep(duration, freqency, volume) {
    let _beep = (() => {
      return (duration, freqency, volume) => {
        var oscillator = this.synth.createOscillator();
        var node = this.synth.createGain();
        oscillator.connect(node);
        node.connect(this.synth.destination);
        oscillator.type = 'square';
        oscillator.frequency.value = freqency;

        node.gain.value = volume / 20;
        oscillator.start();

        setTimeout(function () {
          oscillator.stop();
        }, duration);

      };
    })();
    _beep(duration, freqency, volume);
  }

}
