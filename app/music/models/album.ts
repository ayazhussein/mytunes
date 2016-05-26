import {IAlbum, AlbumImageSize} from './ialbum';
import {ISong} from './isong';

export class Album implements  IAlbum {
    


    constructor(public mbid:number,
                public name:string,
                public artist:string,
                public url:string,
                public images?: Array<string>,
                public songs? : Array<ISong>
    ) {

    }

    getImage(size:string) {
        let image = this.images.find((image) => (image["size"] == size));
        return image ? image["#text"] : undefined;
    }
}