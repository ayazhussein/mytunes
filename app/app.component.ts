import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
import {RouterOutlet} from '@angular/router-deprecated';
import {LoginComponent} from './user/login.component';
import {RegistrationComponent} from './user/registration.component';
import {HeaderComponent} from './common/header.component';
import {WelcomeComponent} from './common/welcome.component';
import {FooterComponent} from './common/footer.component';
import {AlbumComponent} from './music/album.component';
import {AlbumsComponent} from './music/albums.component';

@Component({
    selector : 'my-app',
    template: `
        <header-component></header-component>
        <div class="container">
            
            <router-outlet></router-outlet>
     
        </div>
        <footer-component></footer-component>
    `,
    directives : [RouterOutlet, LoginComponent, RegistrationComponent, HeaderComponent, WelcomeComponent, FooterComponent, AlbumComponent, AlbumsComponent]
})

@RouteConfig([
    { path: '/',name: "Home" ,component: WelcomeComponent, useAsDefault: true},
    { path: '/albums',name:"Albums", component: AlbumsComponent},
    { path: '/album',name:"Album", component: AlbumComponent},
    { path: '/login' ,name:"Login", component: LoginComponent},
    { path: '/registration' ,name:"Registration", component: RegistrationComponent}

])
export class AppComponent {

    constructor() {

    }

}

