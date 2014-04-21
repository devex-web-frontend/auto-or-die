'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var DxslideGenerator = module.exports = function DxslideGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(DxslideGenerator, yeoman.generators.NamedBase);

DxslideGenerator.prototype.createSlide = function createSlide() {
    var fileName = '_html/partials/slides/' + this.name + '.hbs';

    this.log.info('creating slide ' + this.args[0]);
    this.template('_slide.hbs', fileName);
};


DxslideGenerator.prototype.registerSlide = function registerSlide() {
    var slideIndex = '_html/partials/slides.hbs',
        slides = this.readFileAsString(slideIndex);

    slides = slides + '\n{{> ' + this.name + ' }}';

    this.writeFileFromString(slides, slideIndex);

    this.log.info('slide registered');
};

