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
var router_deprecated_1 = require('@angular/router-deprecated');
var login_component_1 = require('./user/login.component');
var registration_component_1 = require('./user/registration.component');
var header_component_1 = require('./common/header.component');
var welcome_component_1 = require('./common/welcome.component');
var footer_component_1 = require('./common/footer.component');
var album_component_1 = require('./music/album.component');
var albums_component_1 = require('./music/albums.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <header-component></header-component>\n        <div class=\"container\">\n            <router-outlet></router-outlet>        \n        </div>\n        <footer-component></footer-component>\n    ",
            directives: [router_deprecated_1.RouterOutlet, login_component_1.LoginComponent, registration_component_1.RegistrationComponent, header_component_1.HeaderComponent, welcome_component_1.WelcomeComponent, footer_component_1.FooterComponent, album_component_1.AlbumComponent, albums_component_1.AlbumsComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Home', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
            { path: '/albums', name: 'Albums', component: albums_component_1.AlbumsComponent },
            { path: '/album', name: 'Album', component: album_component_1.AlbumComponent },
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
            { path: '/registration', name: 'Registration', component: registration_component_1.RegistrationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map