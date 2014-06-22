(function() {
	'use strict';

	module.exports.register = function(Handlebars) {

		function randomNumber(from, to, frac) {
			var random;

			from = from || 1;
			to = to || 10;

			random = Math.random() * (to - from) + from;

			if (typeof frac === 'number') {
				random = random.toFixed(frac);
			} else {
				random = Math.ceil(random);
			}

			return new Handlebars.SafeString(random);
		}

		Handlebars.registerHelper('randomNumber', randomNumber);

	};
}).call(this);