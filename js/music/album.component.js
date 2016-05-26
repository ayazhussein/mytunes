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
var music_srv_1 = require('./services/music.srv');
var ialbum_1 = require('./models/ialbum');
var AlbumComponent = (function () {
    function AlbumComponent(routeParams, musicService) {
        this.routeParams = routeParams;
        this.musicService = musicService;
        this.imageSize = ialbum_1.AlbumImageSize.LARGE;
        this.getAlbumInfo(this.routeParams.get("id"), this.routeParams.get("artist"), this.routeParams.get("album"));
    }
    AlbumComponent.prototype.getAlbumInfo = function (id, artist, name) {
        var _this = this;
        this.musicService.albumInfo(id, artist, name)
            .subscribe(function (album) {
            _this.album = album;
            var image = _this.album.getImage(ialbum_1.AlbumImageSize.LARGE);
        });
    };
    AlbumComponent = __decorate([
        core_1.Component({
            selector: 'album-component',
            template: "\n        <div *ngIf=\"album\">\n            <div class=\"page-header\">\n                <h1>{{ album.name}} <small>{{ album.artist}}</small></h1>\n            </div>\n            <div class=\"media\" >\n                <div class=\"media-left\">\n                    <a href=\"#\">\n                        <img class=\"media-object\" [src]=\"album.getImage(imageSize)\">\n                    </a>\n                </div>          \n                <div class=\"media-body\">\n                    <ul>\n                        <li *ngFor=\"let song of album.songs\">\n                            {{ song.name }}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
            providers: [music_srv_1.MusicService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, music_srv_1.MusicService])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map