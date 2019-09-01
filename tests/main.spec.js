import { expect } from 'chai';
import { search, searchAlbuns, searchArtists, searchPlalists, searchTracks } from '../src/main';

describe('Spotify Wrapper', function () {
    describe('Smoke tests', function () {
        //search (generics)
        it('should exist the search method', function () {
            expect(search).to.be.exist;
        });

        //searchAlbuns
        it('should exist the searchAlbuns method', function () {
            expect(searchAlbuns).to.be.exist;
        });

        //searchArtists
        it('should exist the searchArtists method', function () {
            expect(searchArtists).to.be.exist;
        });

        //searchTracks
        it('should exist the searchTracks method', function () {
            expect(searchTracks).to.be.exist;
        });

        //searchPlalists
        it('should exist the searchPlalists method', function () {
            expect(searchPlalists).to.be.exist;
        });
    });

    describe('Generic search', function () {
        it('should call fetch funtion', function () {
            const artists = search()

        });
    });
});
