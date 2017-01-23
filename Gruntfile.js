module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		autoprefixer: {
		  css: {
			  src: './*.css',
			  options: {
				map: true
			  }
		  }
		},
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: './'
				}
			}
		},
		watch: {
		  options: {
        	livereload: true
      	  },
			css: {
				files: ['**/*.scss'],
				tasks: ['compass', 'autoprefixer:css'],
				options: {
					interrupt: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
