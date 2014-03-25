(function() {
	'use strict';

	module.exports.register = function(Handlebars) {

		function define(variable, value, scope) {
			scope[variable] = value;
		}

		function defineForEach(variable, value, scope) {
			var keys;

			if (Array.isArray(scope)) {
				scope.forEach(function(el) {
					el[variable] = value;
				});
			} else {
				keys = Object.keys(scope);

				keys.forEach(function(el) {
					scope[el][variable] = value;
				});
			}
		}

		function defineRandomId(scope) {
			scope.randomId = 'id_' + new Date().getTime() + '_' + Math.floor(Math.random() * 100000);
		}

		Handlebars.registerHelper('define', define);
		Handlebars.registerHelper('defineForEach', defineForEach);
		Handlebars.registerHelper('defineRandomId', defineRandomId);

	};
}).call(this);
