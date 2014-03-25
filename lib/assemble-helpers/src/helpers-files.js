(function() {
	'use strict';

	module.exports.register = function(Handlebars) {
		function inc(partial, scope) {
			if (typeof Handlebars.partials[partial] === 'string') {
				Handlebars.partials[partial] = Handlebars.compile(Handlebars.partials[partial]);
			}

			return new Handlebars.SafeString(Handlebars.partials[partial].call(this, scope));
		}

		Handlebars.registerHelper('inc', inc);
	};
}).call(this);