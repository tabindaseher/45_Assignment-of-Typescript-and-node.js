"use strict";
// create an object in function  named make_album
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    ;
    return album;
}
;
//calling three function with different value
let album1 = make_album('Tabinda', 'Beat Drop');
console.log(album1);
let album2 = make_album('Seher', 'Catch the Beat');
console.log(album2);
//calling function with tracks
let album3 = make_album('Bano', 'Tune In', 10);
console.log(album3);
