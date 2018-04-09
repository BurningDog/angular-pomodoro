import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countdown = 0;
  INITIAL_SECONDS = 25 * 60;
  secondsLeft = this.INITIAL_SECONDS;
  interval: NodeJS.Timer;

  ngOnInit(): void {
  }

  start() {
    this.interval = setInterval(() => {
      this.secondsLeft--;
      this.countdown = this.calculatePercentageLeft(this.secondsLeft);
      const pomodoroHasEnded = this.secondsLeft < 0;
      if (pomodoroHasEnded) {
        this.reset();
      }
    }, 1000);
  }

  calculatePercentageLeft(secondsLeft: number, initialSeconds: number = this.INITIAL_SECONDS): number {
    const timeIsUp = secondsLeft === 0;
    if (timeIsUp) {
      return 100;
    }
    const percentageLeft = Math.ceil(100 - (secondsLeft / initialSeconds * 100));
    return percentageLeft;
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
