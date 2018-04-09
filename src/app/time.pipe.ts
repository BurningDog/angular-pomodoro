import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.showMinutesAndSeconds(value);
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
