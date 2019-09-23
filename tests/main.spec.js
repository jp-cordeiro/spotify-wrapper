import chai,{ expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
var sinonStubPromise = require('sinon-stub-promise');
import { search, searchAlbuns, searchArtists, searchPlaylists, searchTracks } from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Spotify Wrapper', function () {
    let fetchedStub;
    let promise;

    beforeEach(function(){
        fetchedStub = sinon.stub(global, "fetch");
        promise = fetchedStub.returnsPromise();
    });

    afterEach(function(){
        fetchedStub.restore();
    });

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
        it('should exist the searchPlaylists method', function () {
            expect(searchPlaylists).to.be.exist;
        });
    });

    describe('Generic search', function () {

        it('should call fetch funtion', function () {
            const artists = search();

            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', function () {
            context('passing one type', () => {
                const artist = search('Incubus','artist');

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                const albuns = search('Incubus','album');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
            });

            context('passing more one type', () => {
                let types = ['artist','album'];

                const data = search('Incubus',types);

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
            });
        });

        it('should return the JSON Data form the Promise', function () {
            promise.resolves({body: "json"});
            const artists = search("Incubus",'artist');

            expect(artists.resolveValue).to.be.eql({body: 'json'});
        })
    });

    /**
     * Artists
     */
    describe('Search artists', function () {
        it('should call fetch function', () => {
            const artists = searchArtists('Incubus');

            expect(fetchedStub).to.have.been.calledOnce;
        })

        it('should call fecth with the correct url',  () => {
            const artists = searchArtists('The+Offspring');

            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=The+Offspring&type=artist');
        });
    });

    /**
     * Albuns
     */
    describe('Search albuns', function () {
        it('should call fetch function', () => {
            const artists = searchAlbuns('Americana');

            expect(fetchedStub).to.have.been.calledOnce;
        })

        it('should call fecth with the correct url',  () => {
            const artists = searchAlbuns('Americana');

            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=Americana&type=album');
        });
    });

    /**
     * Tracks
     */
    describe('Search tracks', function () {
        it('should call fetch function', () => {
            const artists = searchTracks('Americana');

            expect(fetchedStub).to.have.been.calledOnce;
        })

        it('should call fecth with the correct url',  () => {
            const artists = searchTracks('Americana');

            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=Americana&type=track');
        });
    });

    /**
     * Playlists
     */
    describe('Search playlists', function () {
        it('should call fetch function', () => {
            const artists = searchPlaylists('This+is+Offspring');

            expect(fetchedStub).to.have.been.calledOnce;
        })

        it('should call fecth with the correct url',  () => {
            const artists = searchPlaylists('This+is+Offspring');

            expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=This+is+Offspring&type=playlist');
        });
    });
});
