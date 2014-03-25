module.exports = function(grunt) {

	grunt.initConfig({
		stylus: {
			options: {
				'resolve uri': true,
				paths: ['lib/stylus-utilus/src/']
			},
			site: {
				files: [
					{'inc/css/main.css': 'inc/styl/main.styl'}
				]
			}
		},
		watch: {
			stylus: {
				files: ['inc/styl/**'],
				tasks: ['stylus']
			},
			assemble: {
				files: ['_html/**'],
				tasks: ['assemble']
			}
		},
		assemble: {
			options: {
				data: ['_html/data/**/*.json'],
				partials: ['lib/assemble-partials/src/**/*.hbs', '_html/partials/**/*.hbs'],
				helpers: ['lib/assemble-helpers/src/**/*.js'],
				flatten: true
			},
			slides: {
				files: {
					'index.html': ['_html/index.hbs']
				}
			}
		},
		clean: {
			install: {
				src: ['lib']
			},
			css: {
				src: ['inc/css']
			},
			html: {
				src: ['index.html']
			}
		},
		shell: {
			bower_install: {
				command: "node node_modules/bower/bin/bower install"
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-interactive-shell');
	grunt.loadNpmTasks('assemble');

	grunt.registerTask('html', ['clean:html', 'assemble']);
	grunt.registerTask('css', ['clean:css', 'stylus']);
	grunt.registerTask('install', ['clean:install', 'shell:bower_install']);


	grunt.registerTask('default', ['html', 'css', 'watch']);
};
