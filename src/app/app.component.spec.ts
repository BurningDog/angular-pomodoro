import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatButtonModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { TimePipe } from './time.pipe';

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
        AppComponent,
        TimePipe
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

  it('should calculate the time left as a percentage', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    let actual = component.calculatePercentageLeft(0);
    expect(actual).toBe(100);

    actual = component.calculatePercentageLeft(25 * 60 / 2);
    expect(actual).toBe(50);

    actual = component.calculatePercentageLeft(25 * 60);
    expect(actual).toBe(0);

    actual = component.calculatePercentageLeft(25 * 60 / 4);
    expect(actual).toBe(75);

    actual = component.calculatePercentageLeft((25 * 60 / 4) * 3);
    expect(actual).toBe(25);
  });

});
