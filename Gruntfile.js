module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			local: {
				port: 3000,
			}
		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('serve', 'connect:local')
	grunt.registerTask('default', 'serve');
};
