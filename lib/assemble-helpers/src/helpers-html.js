(function() {
	'use strict';

	module.exports.register = function(Handlebars) {

		function noLineBreaks(context) {
			return new Handlebars.SafeString(context.fn(this).replace(/[\r\n\t]/g, ''));
		}

		function modifiers(context, baseClassName) {
			var str = '';

			if (context.modifiers) {
				context.modifiers.forEach(function(mod) {
					str += ' ' + baseClassName + '-' + mod;
				});
			}

			return new Handlebars.SafeString(str);
		}

		Handlebars.registerHelper('nolinebreaks', noLineBreaks);
		Handlebars.registerHelper('modifiers', modifiers);

	};
}).call(this);
