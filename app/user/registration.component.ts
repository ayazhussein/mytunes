/**
 * Created by ayaz on 21/05/16.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {UserService} from './services/user.srv';
import {CountryService} from '../common/services/country.srv';
import {IUser} from './models/iuser';
import {ICountry} from '../common/models/icountry';

@Component({
    selector : 'registration-component',
    template : `
        <form #registrationForm="ngForm">
            <div class="form-group">
                <input type="text" required placeholder="User Name" ngControl="userName" #userName="ngForm" class="form-control">
                <div class="alert alert-danger" [hidden]="userName.valid || userName.pristine">Username required</div>
            </div>
            <div class="form-group">
                <input type="text" required placeholder="email" ngControl="email" #email="ngForm" class="form-control">
                <div class="alert alert-danger" [hidden]="email.valid || email.pristine">Email required</div>
            </div>
            <div class="form-group">
                <input type="password" required placeholder="Password" ngControl="password" #password="ngForm" class="form-control">
                <div class="alert alert-danger" [hidden]="password.valid || password.pristine">Password required</div>
            </div>
            <div class="form-group">
                <select class="form-control" ngControl="country" #country="ngForm">
                    <option value="">Select a country</option>
                    <option *ngFor="let country of countries" [value]="country.alpha2Code">{{ country.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <input type="date" ngControl="birthday" #birthday="ngForm"/>
            </div>
            <button type="submit" class="btn btn-default" [disabled]="!registrationForm.valid" (click)="register(userName.value, email.value, password.value, country.value, birthday.value)"> Register</button>
        </form>
    `,
    providers : [UserService, CountryService]

})

export class RegistrationComponent {
    public countries:Array<ICountry> = [];

    constructor(private userService:UserService, private countryService:CountryService, private router:Router) {
        this.countryService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            })
    }

    register(userName:string, email:string, password:string, country?:string, birthday?:Date) {
        this.userService.register(userName,email,password,country,birthday)
            .subscribe(user => {
                this.router.navigateByUrl('/');
            });
    }
}