import chai,{ expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
var sinonStubPromise = require('sinon-stub-promise');
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
        let fetchedStub;
        let promise;

        beforeEach(function(){
            fetchedStub = sinon.stub(global, "fetch");
            promise = fetchedStub.returnsPromise();
        });

        afterEach(function(){
            fetchedStub.restore();
        });

        it('should call fetch funtion', function () {
            const artists = search();

            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', function () {
            context('passing one type', () => {
                const artist = search('Incubus','artist');

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

                const albuns = search('Incubus','albuns');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albuns');
            });

            context('passing more one type', () => {
                let types = ['artist','albuns'];

                const data = search('Incubus',types);

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,albuns');
            });
        });

        it('should return the JSON Data form the Promise', function () {
            promise.resolves({body: "json"});
            const artists = search("Incubus",'artist');

            expect(artists.resolveValue).to.be.eql({body: 'json'});
        })
    });
});
