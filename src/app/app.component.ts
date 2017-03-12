import {Component} from '@angular/core';
import {Clock} from './clock';
import {Display} from './display';
import {Stopwatch} from './stopwatch';
import {Beeper} from './beeper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuVisible: boolean = false;

  fullScreenActive: boolean = false;
  display: Display;
  private modes: Array<Display> = [
    new Clock(),
    new Stopwatch()
  ];
  private currentMode: number = 0;

  constructor(private beeper: Beeper) {
  }

  ngOnInit() {
    this.display = this.modes[0];
    this.display.start();
  }

  toggleRunning() {
    this.beeper.buttonBeep();
    if (this.display.running) {
      this.display.stop();
    } else {
      this.display.start();
    }
  }

  toggleFullScreen(): void {
    this.beeper.buttonBeep();
    if (this.fullScreenActive) {
      this.cancelFullscreen();
    } else {
      this.launchFullScreen();
    }
    this.fullScreenActive = !this.fullScreenActive;
  }

  toggleMode(): void {
    this.beeper.buttonBeep();
    this.currentMode = this.currentMode + 1;
    this.display.stop();
    this.display = this.modes[this.currentMode % this.modes.length];
    this.display.reset();
  }

  toggleMenu(): void {
    this.beeper.buttonBeep();
    this.menuVisible = !this.menuVisible;
  }

  launchFullScreen(): void {
    let element: any = document.getElementById('container');
    if (element.requestFullScreen) {
      element.requestFullScreen();
    }
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
    else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
    else if (element.msRequestFullScreen) {
      element.msRequestFullScreen();
    }
  }

  cancelFullscreen(): void {
    let doc: any = document;
    if (doc.cancelFullScreen) {
      doc.cancelFullScreen();
    }
    else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    }
    else if (doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen();
    }
    else if (doc.msCancelFullScreen) {
      doc.msCancelFullScreen();
    }
  }

}
