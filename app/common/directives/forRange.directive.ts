import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef} from '@angular/core';

@Directive({
    selector : '[forRange]'
})
export class ForRangeDirective {
    @Input() set forRange(value:number) {
        this.render(value)
    }
    constructor(private templateRef:TemplateRef<any>, private viewContainer: ViewContainerRef) {

    }
    render(range:number) {
        for (let i = 0; i < range; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef,"index", i);

        }
    }
}