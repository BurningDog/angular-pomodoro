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

  showMinutesAndSeconds(seconds: number): string {
    const minutesLeft = this.calculateMinutesLeftToDisplay(seconds);
    const secondsLeft = this.calculateSecondsLeftInMinuteToDisplay(seconds);
    const time = this.addAZeroToSingleDigitaMinuteOrSecond(minutesLeft) +
                 ':' +
                 this.addAZeroToSingleDigitaMinuteOrSecond(secondsLeft);
    return time;
  }

  calculateMinutesLeftToDisplay(seconds: number): number {
    const secondsAreNegative = seconds < 0;
    if (secondsAreNegative) {
      return 0;
    }
    return Math.floor(seconds / 60);
  }

  calculateSecondsLeftInMinuteToDisplay(seconds: number): number {
    const secondsAreNegative = seconds < 0;
    if (secondsAreNegative) {
      return 0;
    }
    const minutesGoneByInSeconds = this.calculateMinutesLeftToDisplay(seconds) * 60;
    const secondsRemaining = seconds - minutesGoneByInSeconds;
    return secondsRemaining;
  }

  addAZeroToSingleDigitaMinuteOrSecond(time: number): string {
    let newTime = time.toString();
    const timeIsOnlySingleDigit = newTime.length === 1;
    if (timeIsOnlySingleDigit) {
      newTime = '0' + newTime;
    }
    return newTime;
  }
}
