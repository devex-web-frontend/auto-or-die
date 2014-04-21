/*global describe, beforeEach, it*/
'use strict';

var path    = require('path'),
    helpers = require('yeoman-generator').test,
    rimraf = require('rimraf');


describe('dxslide generator', function () {
    var TEMP_DIR = path.join(__dirname, 'temp');


    beforeEach(function (done) {
        helpers.testDirectory(TEMP_DIR, function (err) {
            if (err) {
                return done(err);
            }
            done();
        });
    });

    afterEach(function(done) {
        rimraf(TEMP_DIR, function () {
            done();
        });
    });

    it('should create slide file', function (done) {
        var expected = [
            '_html/partials/slides/qweqwe.hbs'
        ],
        gen = helpers.createGenerator('dxslide:app', ['../../app'],
                ['qweqwe']);

        gen.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

});
