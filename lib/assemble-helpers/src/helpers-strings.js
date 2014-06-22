(function() {
	'use strict';

	module.exports.register = function(Handlebars) {

		function stringLength(str) {
			return str.toString().length;
		}

		Handlebars.registerHelper('stringLength', stringLength);

	};
}).call(this);