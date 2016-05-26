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
var SearchComponent = (function () {
    function SearchComponent() {
        this.queryChange = new core_1.EventEmitter();
    }
    SearchComponent.prototype.search = function (query, $event) {
        if (!$event || $event.keyCode == 13) {
            this.queryChange.next(query);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchComponent.prototype, "query", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "queryChange", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            template: "\n        <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Search\" class=\"form-control\" [(ngModel)]=\"query\" (keypress)=\"search(query,$event)\"> \n        </div>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"search(query)\">Search</button>\n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map