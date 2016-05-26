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
var ialbum_1 = require('./models/ialbum');
var music_srv_1 = require("./services/music.srv");
var highlight_directive_1 = require("../common/directives/highlight.directive");
var pagination_component_1 = require("../common/pagination.component");
var ellipsis_pipe_1 = require("../common/pipes/ellipsis.pipe");
var AlbumsComponent = (function () {
    function AlbumsComponent(musicService, routeParams) {
        this.musicService = musicService;
        this.routeParams = routeParams;
        this.albums = [];
        this.albumImageSize = ialbum_1.AlbumImageSize.MEDIUM;
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        this.albumsSearch(this.routeParams.get("query"), this.routeParams.get("page"));
    };
    AlbumsComponent.prototype.albumsSearch = function (query, page) {
        var _this = this;
        if (query) {
            this.musicService.albumSearch(query, parseInt(page))
                .subscribe(function (res) {
                _this.albums = res.albums;
                _this.pager = res.pager;
            });
        }
        else {
            this.albums = [];
        }
    };
    AlbumsComponent = __decorate([
        core_1.Component({
            selector: 'albums-component',
            template: "\n        <ul class=\"media-list\">\n            <li class=\"media\" *ngFor=\"let album of albums\" [routerLink]=\"['Album',{id: album.id,artist: album.artist, album: album.name}]\" appHighLight [hoverColor]=\"'whitesmoke'\" [activeColor]=\"'gray'\" >\n                <div class=\"media-left\">\n                    <a>\n                        <img class=\"media-object\" [src]=\"album.getImage(albumImageSize)\">\n                    </a>    \n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\">{{ album.name | ellipsis:40 }}</h4>\n                    <p>{{ album.artist}}</p>\n                </div>\n            </li>\n        </ul>\n        <pagination-component [pager]=\"pager\" [pathName]=\"'Albums'\"></pagination-component>\n    ",
            providers: [music_srv_1.MusicService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, highlight_directive_1.HighLightDirective, pagination_component_1.PaginationComponent],
            pipes: [ellipsis_pipe_1.EllipsisPipe]
        }), 
        __metadata('design:paramtypes', [music_srv_1.MusicService, router_deprecated_1.RouteParams])
    ], AlbumsComponent);
    return AlbumsComponent;
}());
exports.AlbumsComponent = AlbumsComponent;
//# sourceMappingURL=albums.component.js.map