"use strict";
var Observable_1 = require('rxjs/Observable');
var user_1 = require('../models/user');
var UserService = (function () {
    function UserService() {
        this.firebaseUrl = "https://mytunesapp.firebaseio.com";
        this.firebaseRef = new Firebase(this.firebaseUrl);
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this.firebaseRef.onAuth(function (authData) {
                authData = _this.firebaseRef.getAuth();
                var user;
                if (authData) {
                    user = new user_1.User(authData);
                }
                observable.next(user);
            });
        });
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this.firebaseRef.authWithPassword({
                email: userName,
                password: password
            }, function (error, authData) {
                if (error) {
                    observable.error(error);
                }
                else {
                    observable.next(new user_1.User(authData));
                }
            });
        });
    };
    UserService.prototype.register = function (userName, email, password, country, birthday) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this.firebaseRef.createUser({
                userName: userName,
                email: email,
                password: password
            }, function (error, userData) {
                if (error) {
                    observable.error(error);
                }
                else {
                    observable.next(userData);
                }
            });
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this.firebaseRef.unauth();
            observable.next();
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.srv.js.map