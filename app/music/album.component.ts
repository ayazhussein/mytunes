/**
 * Created by ayaz on 21/05/16.
 */
import {Component} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {MusicService} from './services/music.srv';
import {IAlbum, AlbumImageSize} from './models/ialbum';
import {Album} from "./models/album";

@Component({
    selector : 'album-component',
    template : `
        <div *ngIf="album">
            <div class="page-header">
                <h1>{{ album.name}} <small>{{ album.artist}}</small></h1>
            </div>
            <div class="media" >
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" [src]="album.getImage(imageSize)">
                    </a>
                </div>          
                <div class="media-body">
                    <ul>
                        <li *ngFor="let song of album.songs">
                            {{ song.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    providers : [MusicService]

})

export class AlbumComponent {
    public album:IAlbum;
    private imageSize:AlbumImageSize = AlbumImageSize.LARGE;
    
    constructor(private routeParams:RouteParams, private musicService:MusicService) {
        this.getAlbumInfo(this.routeParams.get("id"), this.routeParams.get("artist"),this.routeParams.get("album"));
    }
    
    getAlbumInfo(id:string,artist:string, name:string) {
        this.musicService.albumInfo(id,artist,name)
            .subscribe(album => {
                this.album = album;
                var image = this.album.getImage(AlbumImageSize.LARGE);
            })
    }
    
}