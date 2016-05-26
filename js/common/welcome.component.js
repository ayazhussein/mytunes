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
/**
 * Created by ayaz on 21/05/16.
 */
var core_1 = require('@angular/core');
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.moreInfo = false;
    }
    WelcomeComponent.prototype.showMoreInfo = function (moreInfo) {
        this.moreInfo = !moreInfo;
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'welcome-component',
            template: "\n        <div class=\"jumbotron\">\n            <h1>Welcome to MyTunes</h1>\n            <p></p>\n            <p><a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"showMoreInfo(moreInfo)\" (toggle)=\"moreinfo = !moreInfo\">Learn More</a></p>\n            <div *ngIf=\"moreInfo\">\n                <p>Angular 2 application for learning the following concepts:</p>\n                <ul>\n                    <li>Components</li>\n                    <li>Directives: *ngFor,*ngIf</li>\n                    <li>Routing</li>\n                    <li>Services</li>\n                    <li>Rxjs</li>\n                    <li>Typescript</li>\n                    <li>Styles</li>\n                    <li>Data input, Data output</li>\n                    <li>Forms</li>\n                \n                </ul>\n            </div>\n        </div>\n  \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map