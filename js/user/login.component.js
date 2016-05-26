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
var user_srv_1 = require("./services/user.srv");
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (userName, password) {
        var _this = this;
        this.userService.login(userName, password)
            .subscribe(function (result) {
            _this.router.navigateByUrl('/');
        }, function (error) {
            _this.error = error;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            template: "\n        <form #loginForm=\"ngForm\">\n            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">{{error}}</div>\n            <div class=\"form-group\">\n                <label for=\"login\">Login</label>\n                <input type=\"text\" placeholder=\"Login\" class=\"form-control\" required ngControl=\"userName\" #userName=\"ngForm\">\n                <div [hidden]=\"userName.valid || userName.pristine\" class=\"alert alert-danger\">Login required</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" placeholder=\"Password\" class=\"form-control\" required ngControl=\"password\" #password=\"ngForm\">\n                <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password required</div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"login(userName.value, password.value)\" [disabled]=\"!loginForm.form.valid\">Login</button>\n        </form>\n    ",
            providers: [user_srv_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_srv_1.UserService, router_deprecated_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map