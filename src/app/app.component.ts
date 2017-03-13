import {Component} from '@angular/core';
import {Display} from './display';
import {Beeper} from './beeper';
import {MODES, Mode} from './modes';
import "hammerjs";

@Component({
  selector: 'app-root',
  template: '<md-slider style="width:100%;"></md-slider>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuVisible: boolean = false;
  fullScreenActive: boolean = false;
  display: Display;
  selectedMode: Mode;

  constructor(private beeper: Beeper) {
  }

  ngOnInit() {
    this.selectedMode = MODES[0];
    this.display = this.selectedMode.impl;
    this.selectedMode.settings = this.selectedMode.impl.defaultSettings();
    this.display.start();
  }

  updateSettings(selectedMode: any) {
    this.display = selectedMode.impl;
    this.display.updateSettings(selectedMode.settings);
    this.display.reset();
    if (!this.display.supportsStartStop) {
      this.display.start();
    }
    this.menuVisible = false;
  }

  toggleRunning() {
    this.beeper.buttonBeep();

    if (this.display.running || this.display.countingDown) {
      this.display.stop();
    } else if (this.display.pristine) {
      this.display.start();
    } else {
      this.display.reset();
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
