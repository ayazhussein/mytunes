"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ForRangeDirective = (function () {
    function ForRangeDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(ForRangeDirective.prototype, "forRange", {
        set: function (value) {
            this.render(value);
        },
        enumerable: true,
        configurable: true
    });
    ForRangeDirective.prototype.render = function (range) {
        for (var i = 0; i < range; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef, "index", i);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], ForRangeDirective.prototype, "forRange", null);
    ForRangeDirective = __decorate([
        core_1.Directive({
            selector: '[forRange]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], ForRangeDirective);
    return ForRangeDirective;
}());
exports.ForRangeDirective = ForRangeDirective;
//# sourceMappingURL=forRange.directive.js.map