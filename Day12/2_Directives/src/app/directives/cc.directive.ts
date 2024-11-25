import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[change-content]',

})
export class ChangeDirective {
    constructor(element: ElementRef, renderer: Renderer2) {
        // element.nativeElement.innerText = "Changed";
        renderer.setStyle(element.nativeElement, 'border', '2px solid red');
    }
}