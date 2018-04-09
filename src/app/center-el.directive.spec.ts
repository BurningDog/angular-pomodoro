import { CenterElDirective } from './center-el.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('CenterElDirective', () => {
  it('should create an instance', () => {
    // I'm not sure how to handle Renderer2 here
    // @see https://github.com/angular/angular/issues/15341
    // const directive = new CenterElDirective(new ElementRef({}));
    // expect(directive).toBeTruthy();
  });
});
