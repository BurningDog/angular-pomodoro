import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });

  describe('should calculate the correct time', () => {

    it('should return the correct time left', () => {
      const pipe = new TimePipe();
      const secondsLeft = 25 * 60;
      let actual = pipe.showMinutesAndSeconds(secondsLeft);
      expect(actual).toBe('25:00');

      actual = pipe.showMinutesAndSeconds(0);
      expect(actual).toBe('00:00');

      actual = pipe.showMinutesAndSeconds(225);
      expect(actual).toBe('03:45');

      actual = pipe.showMinutesAndSeconds(613);
      expect(actual).toBe('10:13');
    });

    it('should correctly calculate how many minutes are in a number of seconds', () => {
      const pipe = new TimePipe();
      let actual = pipe.calculateMinutesLeftToDisplay(60);
      expect(actual).toBe(1);

      actual = pipe.calculateMinutesLeftToDisplay(90);
      expect(actual).toBe(1);

      actual = pipe.calculateMinutesLeftToDisplay(120);
      expect(actual).toBe(2);

      actual = pipe.calculateMinutesLeftToDisplay(0);
      expect(actual).toBe(0);

      actual = pipe.calculateMinutesLeftToDisplay(25 * 60);
      expect(actual).toBe(25);

      actual = pipe.calculateMinutesLeftToDisplay(-10);
      expect(actual).toBe(0, 'should handle negative numbers');
    });

    it('should calculate the seconds left in a minute', () => {
      const pipe = new TimePipe();
      let actual = pipe.calculateSecondsLeftInMinuteToDisplay(15);
      expect(actual).toBe(15);

      actual = pipe.calculateSecondsLeftInMinuteToDisplay(65);
      expect(actual).toBe(5);

      actual = pipe.calculateSecondsLeftInMinuteToDisplay(30);
      expect(actual).toBe(30);

      actual = pipe.calculateSecondsLeftInMinuteToDisplay(75);
      expect(actual).toBe(15);

      actual = pipe.calculateSecondsLeftInMinuteToDisplay(120);
      expect(actual).toBe(0);

      actual = pipe.calculateSecondsLeftInMinuteToDisplay(145);
      expect(actual).toBe(25);

      actual = pipe.calculateSecondsLeftInMinuteToDisplay(-10);
      expect(actual).toBe(0, 'should handle negative numbers');
    });

    it('should add a zero to a single digit minute or second', () => {
      const pipe = new TimePipe();
      let actual = pipe.addAZeroToSingleDigitaMinuteOrSecond(0);
      expect(actual).toBe('00');

      actual = pipe.addAZeroToSingleDigitaMinuteOrSecond(10);
      expect(actual).toBe('10');
    });
  });
});
