"use strict";
var Album = (function () {
    function Album(mbid, name, artist, url, images, songs) {
        this.mbid = mbid;
        this.name = name;
        this.artist = artist;
        this.url = url;
        this.images = images;
        this.songs = songs;
    }
    Album.prototype.getImage = function (size) {
        var image = this.images.find(function (image) { return (image["size"] == size); });
        return image ? image["#text"] : undefined;
    };
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.js.map