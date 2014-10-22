module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			local: {
				port: 3000,
			}
		},
		inlinecss: {
			files: {
         			'email-to-send.html': 'index.html'
         		}
      		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-inline-css');

	grunt.registerTask('serve', 'connect:local');
	grunt.registerTask('convert', 'inlinecss');
	grunt.registerTask('default', 'serve');
};
