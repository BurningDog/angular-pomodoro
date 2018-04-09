import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCenterEl]'
})
export class CenterElDirective {

  constructor(private _elemRef: ElementRef, private _renderer: Renderer2) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  @HostListener('window:load', ['$event'])
  onLoad(event) {
    this.resize();
  }

  resize() {
    const elementSize = this._elemRef.nativeElement.clientWidth;
    const left = elementSize / 2;
    this._renderer.setStyle(this._elemRef.nativeElement, 'margin-left', '-' + left + 'px');
  }

}
