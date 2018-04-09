import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/** Modules */
import { MatButtonModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { TimePipe } from './time.pipe';
import { CenterElDirective } from './center-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    CenterElDirective
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
