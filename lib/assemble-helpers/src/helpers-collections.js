(function() {
	'use strict';

	module.exports.register = function(Handlebars) {

		function toArray(collection) {
			var keys,
				result;

			if (Array.isArray(collection)) {
				return collection;
			} else {
				keys = Object.keys(collection);
				result = [];

				keys.forEach(function(key) {
					result.push(collection[key]);
				});

				return result;
			}
		}

		function collectionLength(collection) {
			return toArray(collection).length;
		}

		function withRandomItem(collection, context) {
			var keys = Object.keys(collection),
				randomKey = Math.floor(Math.random() * keys.length);

			return new Handlebars.SafeString(context.fn(collection[randomKey]));
		}

		function withSubCollection(collection, start, end, context) {
			var newCollection;

			collection = toArray(collection);
			start = start || 0;
			end = end || collection.length - 1;

			newCollection = collection.slice(start, end);
			newCollection = (newCollection.length === 1) ? newCollection[0] : newCollection;

			return new Handlebars.SafeString(context.fn(newCollection));
		}

		function ifContains(collection, key, context) {
			if (collection) {
				if (Array.prototype.indexOf.call(collection, key) !== -1) {
					return context.fn(this);
				} else {
					return context.inverse(this);
				}
			} else {
				return context.fn(this);
			}
		}

		function unlessContains(collection, key, context) {
			if (collection) {
				if (Array.prototype.indexOf.call(collection, key) === -1) {
					return context.fn(this);
				} else {
					return context.inverse(this);
				}
			} else {
				return context.fn(this);
			}
		}

		Handlebars.registerHelper('collectionLength', collectionLength);
		Handlebars.registerHelper('withRandomItem', withRandomItem);
		Handlebars.registerHelper('withSubCollection', withSubCollection);
		Handlebars.registerHelper('if_contains', ifContains);
		Handlebars.registerHelper('unless_contains', unlessContains);

	};
}).call(this);
