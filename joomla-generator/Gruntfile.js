module.exports = function (grunt) {

    var serveStatic = require('serve-static')
    var modRewrite = require('connect-modrewrite')

    // Project configuration.
    grunt.initConfig({
        //pkg contains all property name defined in the package.json (e.g. name, devDependencies aso)
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: 'dist',
            server: '.tmp'
        },
//        connect: {
//				options: {
//					base: 'htdocs/'
//				},
//				livereload: {
//					options: {
//						open: false,
//					}
//				}
        /*
         options: {
         port: 8000,
         hostname: '*',
         base: 'htdocs',
         livereload: 35731
         },
         livereload: {
         options: {
         open: true,
         middleware: function (connect) {
         return [
         //                            connect().use(
         //                                    '/vendor',
         //                                    serveStatic('./vendor')
         //                                    ),
         //                            connect().use(
         //                                    '/src',
         //                                    serveStatic('./src')
         //                                    ),
         //  serveStatic('htdocs')
         ];
         }
         }
         }
         */
//        },

//        php: {
//            dev: {
//                options: {
//                    hostname: '127.0.0.1/dr-nemec-relaunch/htdocs/',
//                }
//            }
//        },

        sass: {
            server: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'htdocs/templates/nemec/css/main.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            scss: {
                files: ['scss/{,*/,*/*/}*.{scss,sass}'],
                tasks: ['sass:server']
            },
            livereload: {
                options: {
                    livereload: 35729
                },
                files: [
                    'htdocs/templates/nemec/**/*'
                ]
            }
        }
    });
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
    });

//    grunt.loadNpmTasks('grunt-jekyll');
//    grunt.loadNpmTasks('grunt-contrib-clean');
//    grunt.loadNpmTasks('grunt-contrib-connect');
//    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
    ]);

    grunt.registerTask('serve', [
        'clean:server',
        'sass:server',
//        'connect',
        'watch'
    ])

};