/**
 * Created by ayaz on 21/05/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {ForRangeDirective} from "./directives/forRange.directive";
import {IPager} from "./models/ipager";

@Component({
    selector : 'pagination-component',
    template : `
        <nav *ngIf="pager">
            <ul class="pagination">
                <li *forRange="pager.pages; let i=index" (click)="goToPages(i)"><a> {{ i }} </a></li>
            </ul>
        </nav>
    
    `,
    directives : [ForRangeDirective]

})

export class PaginationComponent implements OnInit {

    @Input() pager:IPager;
    @Input() pathName:string;

    private query:string;

    constructor(private router:Router,private routeParams:RouteParams) {
        
    }


    ngOnInit():any {
        this.query = this.routeParams.get('query');
    }

    goToPage(i:number) {
        var params = {};
        if (this.query) {
            params["query"] = this.query;
        }
        params["page"] = i;
        this.router.navigate([this.pathName,params]);

    }

}