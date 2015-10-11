// Grunt tasks

module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: { // Task
			dist: { // Target
				options: { // Target options
					style: 'compressed',
					sourcemap: 'none'
				},
				files: { // Dictionary of files
					'css/main.css': 'css/main.scss' // 'destination': 'source'
				}
			}
		},
		watch:{
			options: {
				livereload: true
			},
			html:{
				files: 'index.html',
				tasks: [],
				options: {
					interrupt: true
				}
			},
			css:{
				files: 'css/**/*.scss',
				tasks: ['css'],
				options: {
					interrupt: true
				}
			},
			js:{
				files: ['js/**/*.js', '!js/vendor/**/*.js'],
				tasks: ['js'],
				options:{
					interrupt: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch']);
	grunt.registerTask('css', ['sass']);

};
