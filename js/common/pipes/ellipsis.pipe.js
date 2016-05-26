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
var EllipsisPipe = (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (value, args) {
        if (value && args.length > 0 && value.length > args[0]) {
            return value.substring(0, args[0]) + "...";
        }
        return value;
    };
    EllipsisPipe = __decorate([
        core_1.Pipe({
            name: 'ellipsis'
        }), 
        __metadata('design:paramtypes', [])
    ], EllipsisPipe);
    return EllipsisPipe;
}());
exports.EllipsisPipe = EllipsisPipe;
//# sourceMappingURL=ellipsis.pipe.js.map