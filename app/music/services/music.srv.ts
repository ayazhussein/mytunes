import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {IAlbum} from '../models/ialbum';
import {Album} from '../models/album';
import {ISong} from '../models/isong';
import {Song} from '../models/song';
import {IPager} from '../../common/models/ipager';
import {Pager} from '../../common/models/pager';


@Injectable()
export class MusicService {
    private apiId = "f3431d5ead4f704433b3a20e5076c524";
    constructor(private http:Http) {

    }
    albumSearch(query:string, page:number = 0) {
        return new Observable(observable => {
            let pageParam = page + 1;
            let url = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&page=" + pageParam + "&format=json&api_key=" + this.apiId;
            this.http.get(url)
                .map(res => {
                    var response = res.json();
                    var albums:Array<IAlbum> = [];
                    let results = response.results;
                    results.albummatches.album.forEach(data => {
                        albums.push(new Album(data["mbid"], data["name"], data["artist"], data["url"], data["image"]));
                    });
                    let pager:IPager = new Pager(results["opensearch:itemsPerPage"], results["opensearch:startIndex"], results["opensearch:totalResults"]);
                    return {
                        albums : albums,
                        pager : pager
                    }
                })
                .subscribe(res => {
                    observable.next(res);
                })

        })


    }

    albumInfo(id:string, artist:string, name:string) {
        return new Observable(observable => {

            let url = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&format=json&api_key=" + this.apiId;
            if (id == "") {
                url += "&artist=" + artist + "&album=" + name;
            } else {
                url += "&mbid=" + id;
            }
            this.http.get(url)
                .map(res => {
                    var result = res.json();
                    let data = result.album;
                    var songs:Array<ISong> = [];
                    data.tracks.track.forEach(data => {
                        songs.unshift(new Song(data.name));
                    });

                    let album:Album = new Album(data["mbid"],data["name"],data["artist"],data["url"],data["image"],songs);
                    return album;
                })
                .subscribe(res => {
                    observable.next(res);
                })
        })
    }
}
