import chai,{ expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbuns, searchArtists, searchPlalists, searchTracks } from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

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
            const fetchedStub = sinon.stub(global, 'fetch');
            const artists = search();

            expect(fetchedStub).to.have.calledOnce;

            fetchedStub.restore();
        });

        it('should receive the correct url to fetch', function () {
            const fetchedStub = sinon.stub(global, 'fetch');
            const artist = search('Incubus','artist');

            expect(fetchedStub).to.have.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

            const albuns = search('Incubus','albuns');
            expect(fetchedStub).to.have.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albuns');

            fetchedStub.restore();
        });
    });
});
