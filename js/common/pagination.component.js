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
var router_deprecated_1 = require('@angular/router-deprecated');
var forRange_directive_1 = require("./directives/forRange.directive");
var PaginationComponent = (function () {
    function PaginationComponent(router, routeParams) {
        this.router = router;
        this.routeParams = routeParams;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.query = this.routeParams.get('query');
    };
    PaginationComponent.prototype.goToPage = function (i) {
        var params = {};
        if (this.query) {
            params["query"] = this.query;
        }
        params["page"] = i;
        this.router.navigate([this.pathName, params]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pager", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PaginationComponent.prototype, "pathName", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination-component',
            template: "\n        <nav *ngIf=\"pager\">\n            <ul class=\"pagination\">\n                <li *forRange=\"pager.pages; let i=index\" (click)=\"goToPages(i)\"><a> {{ i }} </a></li>\n            </ul>\n        </nav>\n    \n    ",
            directives: [forRange_directive_1.ForRangeDirective]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map