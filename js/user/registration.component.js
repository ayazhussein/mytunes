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
var user_srv_1 = require('./services/user.srv');
var country_srv_1 = require('../common/services/country.srv');
var RegistrationComponent = (function () {
    function RegistrationComponent(userService, countryService, router) {
        var _this = this;
        this.userService = userService;
        this.countryService = countryService;
        this.router = router;
        this.countries = [];
        this.countryService.getCountries()
            .subscribe(function (countries) {
            _this.countries = countries;
        });
    }
    RegistrationComponent.prototype.register = function (userName, email, password, country, birthday) {
        var _this = this;
        this.userService.register(userName, email, password, country, birthday)
            .subscribe(function (user) {
            _this.router.navigateByUrl('/');
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration-component',
            template: "\n        <form #registrationForm=\"ngForm\">\n            <div class=\"form-group\">\n                <input type=\"text\" required placeholder=\"User Name\" ngControl=\"userName\" #userName=\"ngForm\" class=\"form-control\">\n                <div class=\"alert alert-danger\" [hidden]=\"userName.valid || userName.pristine\">Username required</div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" required placeholder=\"email\" ngControl=\"email\" #email=\"ngForm\" class=\"form-control\">\n                <div class=\"alert alert-danger\" [hidden]=\"email.valid || email.pristine\">Email required</div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" required placeholder=\"Password\" ngControl=\"password\" #password=\"ngForm\" class=\"form-control\">\n                <div class=\"alert alert-danger\" [hidden]=\"password.valid || password.pristine\">Password required</div>\n            </div>\n            <div class=\"form-group\">\n                <select class=\"form-control\" ngControl=\"country\" #country=\"ngForm\">\n                    <option value=\"\">Select a country</option>\n                    <option *ngFor=\"let country of countries\" [value]=\"country.alpha2Code\">{{ country.name }}</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"date\" ngControl=\"birthday\" #birthday=\"ngForm\"/>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!registrationForm.valid\" (click)=\"register(userName.value, email.value, password.value, country.value, birthday.value)\"> Register</button>\n        </form>\n    ",
            providers: [user_srv_1.UserService, country_srv_1.CountryService]
        }), 
        __metadata('design:paramtypes', [user_srv_1.UserService, country_srv_1.CountryService, router_deprecated_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map