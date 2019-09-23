export const search = (q,type) => {
    if(Array.isArray(type)){
        type = type.join();
    }
    return fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`)
        .then(data => data.json());
}

export const searchAlbuns = (q) => {
    search(q, 'album');
}

export const searchArtists = (q) => {
    search(q, 'artist');
}

export const searchTracks = (q) => {
    search(q, 'track');
}

export const searchPlaylists = (q) => {
    search(q, 'playlist');
}

