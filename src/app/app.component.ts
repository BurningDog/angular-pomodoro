import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  countdown = 45;
  INITIAL_SECONDS = 25 * 60;
  secondsLeft = this.INITIAL_SECONDS;
  interval;

  ngOnInit(): void {
  }

  start() {
    this.interval = setInterval(() => {
      this.countdown++;
      this.secondsLeft--;
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  reset() {
    this.countdown = 0;
    this.secondsLeft = this.INITIAL_SECONDS;
    clearInterval(this.interval);
  }

}
