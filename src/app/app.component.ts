import {Component} from '@angular/core';
import {Clock} from './clock';
import {Display} from './display';
import {Stopwatch} from './stopwatch';
import {Beeper} from './beeper';
import {MODES, Mode} from './modes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuVisible: boolean = false;

  fullScreenActive: boolean = false;
  display: Display;
  private currentMode: number = 0;

  constructor(private beeper: Beeper) {
  }

  ngOnInit() {
    this.display = MODES[0].impl;
    this.display.start();
  }

  setMode(mode: Mode) {
    this.display = mode.impl;
    this.display.reset();
    this.menuVisible = false;
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
