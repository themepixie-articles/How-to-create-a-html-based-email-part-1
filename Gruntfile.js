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
      		},
		mailgun: {
			mailer: {
				options: {
					key: "Your API Key",
					sender: "noreply@mywebsite.com",
					recipient: "Your Email",
					subject: "Test email"
				},
				src: ["email-to-send.html"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-inline-css');
	grunt.loadNpmTasks('grunt-mailgun');

	grunt.registerTask('serve', 'connect:local');
	grunt.registerTask('convert', 'inlinecss');
	grunt.registerTask('send', 'mailgun');
	grunt.registerTask('default', 'serve');
};
