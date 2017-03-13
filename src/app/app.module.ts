import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {ModeSelectorComponent} from './mode-selector/mode-selector.component';
import {Beeper} from './beeper';
import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModeSelectorComponent
  ],
  imports: [
    MaterialModule,
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
