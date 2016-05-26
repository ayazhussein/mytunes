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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var album_1 = require('../models/album');
var song_1 = require('../models/song');
var pager_1 = require('../../common/models/pager');
var MusicService = (function () {
    function MusicService(http) {
        this.http = http;
        this.apiId = "f3431d5ead4f704433b3a20e5076c524";
    }
    MusicService.prototype.albumSearch = function (query, page) {
        var _this = this;
        if (page === void 0) { page = 0; }
        return new Observable_1.Observable(function (observable) {
            var pageParam = page + 1;
            var url = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&page=" + pageParam + "&format=json&api_key=" + _this.apiId;
            _this.http.get(url)
                .map(function (res) {
                var response = res.json();
                var albums = [];
                var results = response.results;
                results.albummatches.album.forEach(function (data) {
                    albums.push(new album_1.Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"]));
                });
                var pager = new pager_1.Pager(results["opensearch:itemsPerPage"], results["opensearch:startIndex"], results["opensearch:totalResults"]);
                return {
                    albums: albums,
                    pager: pager
                };
            })
                .subscribe(function (res) {
                observable.next(res);
            });
        });
    };
    MusicService.prototype.albumInfo = function (id, artist, name) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            var url = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&format=json&api_key=" + _this.apiId;
            if (id == "") {
                url += "&artist=" + artist + "&album=" + name;
            }
            else {
                url += "&mbid=" + id;
            }
            _this.http.get(url)
                .map(function (res) {
                var result = res.json();
                var data = result.album;
                var songs = [];
                data.tracks.track.forEach(function (data) {
                    songs.unshift(new song_1.Song(data.name));
                });
                var album = new album_1.Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"], songs);
                return album;
            })
                .subscribe(function (res) {
                observable.next(res);
            });
        });
    };
    MusicService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MusicService);
    return MusicService;
}());
exports.MusicService = MusicService;
//# sourceMappingURL=music.srv.js.map