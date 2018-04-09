import { Component, OnInit } from '@angular/core';
import { PomodoroState } from './pomodoro-state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countdown = 0;
  INITIAL_SECONDS = 25 * 60;
  secondsLeft = this.INITIAL_SECONDS;
  interval;
  pomodoroState: PomodoroState = PomodoroState.STOPPED;

  ngOnInit(): void {
  }

  start() {
    this.pomodoroState = PomodoroState.IN_PROGRESS;
    this.interval = setInterval(() => {
      this.secondsLeft--;
      this.countdown = this.calculatePercentageLeft(this.secondsLeft);
      const pomodoroHasEnded = this.secondsLeft < 0;
      if (pomodoroHasEnded) {
        this.reset();
        this.notifyUser();
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
    this.pomodoroState = PomodoroState.PAUSED;
    clearInterval(this.interval);
  }

  reset() {
    this.pomodoroState = PomodoroState.STOPPED;
    this.countdown = 0;
    this.secondsLeft = this.INITIAL_SECONDS;
    clearInterval(this.interval);
  }

  isStoppedOrIsPaused(): boolean {
    return (this.pomodoroState === PomodoroState.STOPPED) || (this.pomodoroState === PomodoroState.PAUSED);
  }

  isNotPaused(): boolean {
    return (this.pomodoroState !== PomodoroState.PAUSED) && (this.pomodoroState !== PomodoroState.STOPPED);
  }

  hasStarted(): boolean {
    return this.pomodoroState !== PomodoroState.STOPPED;
  }

  notifyUser() {
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else {
      Notification.requestPermission(function (permission) {
        if (permission === 'granted') {
          const notification = new Notification('Pomodoro completed!', );
        }
      });
    }
  }
}
