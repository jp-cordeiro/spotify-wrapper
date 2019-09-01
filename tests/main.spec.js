import { expect } from 'chai';
import { wrapper } from '../src/main';

describe('Spotify Wrapper', function () {
    describe('Smoke tests', function () {
        //search (generics)
        it('should exist the search method', function () {
            expect(wrapper.search).to.be.exist;
        });

        //searchAlbuns
        it('should exist the searchAlbuns method', function () {
            expect(wrapper.searchAlbuns).to.be.exist;
        });

        //searchArtists
        it('should exist the searchArtists method', function () {
            expect(wrapper.searchArtists).to.be.exist;
        });

        //searchTracks
        it('should exist the searchTracks method', function () {
            expect(wrapper.searchTracks).to.be.exist;
        });

        //searchPlalists
        it('should exist the searchPlalists method', function () {
            expect(wrapper.searchPlalists).to.be.exist;
        });
    });
});
