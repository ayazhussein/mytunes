/**
 * Created by ayaz on 21/05/16.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ISearchQuery} from './models/isearchquery';

@Component({
    selector : 'search-component',
    template : `
        <div class="form-group">
            <input type="text" placeholder="Search" class="form-control" [(ngModel)]="query" (keypress)="search(query,$event)"> 
        </div>
        <button type="button" class="btn btn-default" (click)="search(query)">Search</button>
    
    `

})

export class SearchComponent {
    @Input() query:string;
    @Output() queryChange = new EventEmitter();

    constructor() {

    }

    search(query:string, $event?:KeyboardEvent) {
        if (!$event || $event.keyCode == 13) {
            this.queryChange.next(query);
        }
    }
}