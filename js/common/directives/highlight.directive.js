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
var HighLightDirective = (function () {
    function HighLightDirective(elem) {
        this.elem = elem;
        this._activeColor = "red";
        this.originalBackground = elem.nativeElement.style.backgroundColor;
    }
    Object.defineProperty(HighLightDirective.prototype, "activeColor", {
        set: function (colorName) {
            this._activeColor = colorName || this.activeColor;
        },
        enumerable: true,
        configurable: true
    });
    HighLightDirective.prototype.onMouseEnter = function () {
        this.setBackgroundColor(this.hoverColor);
    };
    HighLightDirective.prototype.onMouseLeave = function () {
        this.setBackgroundColor(this.originalBackground);
    };
    HighLightDirective.prototype.onMouseDown = function () {
        this.setBackgroundColor(this._activeColor);
    };
    HighLightDirective.prototype.onMouseUp = function () {
        this.setBackgroundColor(this.originalBackground);
    };
    HighLightDirective.prototype.setBackgroundColor = function (color) {
        this.elem.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HighLightDirective.prototype, "hoverColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HighLightDirective.prototype, "activeColor", null);
    HighLightDirective = __decorate([
        core_1.Directive({
            selector: '[appHighLight]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()',
                '(mousedown)': 'onMouseDown()',
                '(mouseup)': 'onMouseUp()',
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighLightDirective);
    return HighLightDirective;
}());
exports.HighLightDirective = HighLightDirective;
//# sourceMappingURL=highlight.directive.js.map