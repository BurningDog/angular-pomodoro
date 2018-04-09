import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatButtonModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatToolbarModule
    ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
/*
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
*/

  describe('should calculate the correct time', () => {

    it('should return the correct time left', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      const secondsLeft = component.INITIAL_SECONDS;
      let actual = component.showMinutesAndSeconds(secondsLeft);
      expect(actual).toBe('25:00');

      actual = component.showMinutesAndSeconds(0);
      expect(actual).toBe('00:00');

      actual = component.showMinutesAndSeconds(225);
      expect(actual).toBe('03:45');

      actual = component.showMinutesAndSeconds(613);
      expect(actual).toBe('10:13');
    });

    it('should correctly calculate how many minutes are in a number of seconds', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      let actual = component.calculateMinutesLeftToDisplay(60);
      expect(actual).toBe(1);

      actual = component.calculateMinutesLeftToDisplay(90);
      expect(actual).toBe(1);

      actual = component.calculateMinutesLeftToDisplay(120);
      expect(actual).toBe(2);

      actual = component.calculateMinutesLeftToDisplay(0);
      expect(actual).toBe(0);

      actual = component.calculateMinutesLeftToDisplay(component.INITIAL_SECONDS);
      expect(actual).toBe(25);

      actual = component.calculateMinutesLeftToDisplay(-10);
      expect(actual).toBe(0, 'should handle negative numbers');
    });

    it('should calculate the seconds left in a minute', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      let actual = component.calculateSecondsLeftInMinuteToDisplay(15);
      expect(actual).toBe(15);

      actual = component.calculateSecondsLeftInMinuteToDisplay(65);
      expect(actual).toBe(5);

      actual = component.calculateSecondsLeftInMinuteToDisplay(30);
      expect(actual).toBe(30);

      actual = component.calculateSecondsLeftInMinuteToDisplay(75);
      expect(actual).toBe(15);

      actual = component.calculateSecondsLeftInMinuteToDisplay(120);
      expect(actual).toBe(0);

      actual = component.calculateSecondsLeftInMinuteToDisplay(145);
      expect(actual).toBe(25);

      actual = component.calculateSecondsLeftInMinuteToDisplay(-10);
      expect(actual).toBe(0, 'should handle negative numbers');
    });

    it('should add a zero to a single digit minute or second', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      let actual = component.addAZeroToSingleDigitaMinuteOrSecond(0);
      expect(actual).toBe('00');

      actual = component.addAZeroToSingleDigitaMinuteOrSecond(10);
      expect(actual).toBe('10');
    });
  });

});
