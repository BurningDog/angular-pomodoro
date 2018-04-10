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
  pomodoroName = '';

  constructor() { }

  ngOnInit(): void {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else {
      // Ask for permission to send notifications
      Notification.requestPermission();
    }
  }

  start() {
    this.pomodoroState = PomodoroState.IN_PROGRESS;
    this.interval = setInterval(() => {
      this.secondsLeft--;
      this.countdown = this.calculatePercentageLeft(this.secondsLeft);
      const pomodoroHasEnded = this.secondsLeft < 0;
      if (pomodoroHasEnded) {
        this.pomodoroState = PomodoroState.ENDED;
        this.notifyUser();
        clearInterval(this.interval);
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
    return (this.pomodoroState !== PomodoroState.PAUSED) &&
           (this.pomodoroState !== PomodoroState.STOPPED) &&
           (this.pomodoroState !== PomodoroState.ENDED);
  }

  hasStarted(): boolean {
    return this.pomodoroState !== PomodoroState.STOPPED;
  }

  notifyUser() {
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else {
      const _this = this;
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          _this.spawnNotification(_this.pomodoroName, 'favicon.ico', 'Pomodoro complete!');
        }
      });
    }
  }

  spawnNotification(body, icon, title) {
    const options = {
        body: body,
        icon: icon
    };
    const n = new Notification(title, options);
  }
}
