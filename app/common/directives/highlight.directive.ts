import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector : '[appHighLight]',
    host : {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()',
        '(mousedown)' : 'onMouseDown()',
        '(mouseup)' : 'onMouseUp()',
    }
})

export class HighLightDirective {
    private _activeColor = "red";

    @Input() hoverColor:string;
    @Input() set activeColor(colorName:string) {
        this._activeColor = colorName || this.activeColor;
    }

    private originalBackground;

    constructor(private elem:ElementRef) {
        this.originalBackground = elem.nativeElement.style.backgroundColor;
    }
    onMouseEnter() {
        this.setBackgroundColor(this.hoverColor);
    }
    onMouseLeave() {
        this.setBackgroundColor(this.originalBackground);
    }
    onMouseDown() {
        this.setBackgroundColor(this._activeColor);
    }
    onMouseUp() {
        this.setBackgroundColor(this.originalBackground);
    }
    setBackgroundColor(color:string) {
        this.elem.nativeElement.style.backgroundColor = color;
    }
}