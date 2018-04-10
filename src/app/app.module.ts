import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/** Modules */
import { TimePipe } from './time.pipe';
import { CenterElDirective } from './center-el.directive';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    CenterElDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
