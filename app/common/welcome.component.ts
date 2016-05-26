/**
 * Created by ayaz on 21/05/16.
 */
import {Component} from '@angular/core';

@Component({
    selector : 'welcome-component',
    template : `
        <div class="jumbotron">
            <h1>Welcome to MyTunes</h1>
            <p></p>
            <p><a class="btn btn-primary btn-lg" role="button" (click)="showMoreInfo(moreInfo)" (toggle)="moreinfo = !moreInfo">Learn More</a></p>
            <div *ngIf="moreInfo">
                <p>Angular 2 application for learning the following concepts:</p>
                <ul>
                    <li>Components</li>
                    <li>Directives: *ngFor,*ngIf</li>
                    <li>Routing</li>
                    <li>Services</li>
                    <li>Rxjs</li>
                    <li>Typescript</li>
                    <li>Styles</li>
                    <li>Data input, Data output</li>
                    <li>Forms</li>
                
                </ul>
            </div>
        </div>
  
    `

})

export class WelcomeComponent {
    public moreInfo: boolean = false;


    showMoreInfo(moreInfo:boolean) {
        this.moreInfo = !moreInfo;
    }
}