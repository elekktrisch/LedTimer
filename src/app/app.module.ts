import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {DigitsInputComponent} from './digits-input/digits-input.component';
import {ModeSelectorComponent} from './mode-selector/mode-selector.component';
import {Beeper} from './beeper';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DigitsInputComponent,
    ModeSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Beeper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
