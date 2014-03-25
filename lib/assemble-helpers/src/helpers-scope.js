(function() {
	'use strict';

	module.exports.register = function(Handlebars) {

		function setGlobalScope() {
			global.__GLOBAL_SCOPE__ = this;
		}

		function withGlobalScope(scopeKey, context) {
			var scope;

			if (typeof scopeKey === 'string') {
				scope = global.__GLOBAL_SCOPE__[scopeKey];
			} else {
				scope = global.__GLOBAL_SCOPE__;
				context = scopeKey;
			}

			return new Handlebars.SafeString(context.fn(scope));
		}

		Handlebars.registerHelper('setGlobalScope', setGlobalScope);
		Handlebars.registerHelper('withGlobalScope', withGlobalScope);

	};
}).call(this);