import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/** Modules */
import { MatButtonModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe
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
