export const search = (q,type) => {
    if(Array.isArray(type)){
        type = type.join();
    }
    return fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`)
        .then(data => data.json());
}

export const searchAlbuns = () => {

}

export const searchArtists = () => {

}

export const searchTracks = () => {

}

export const searchPlalists = () => {

}

