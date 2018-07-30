module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // minify javascript
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/min/scripts.min.js': [
                        //'node_modules/aos/dist/aos.js',
                        //'node_modules/flickity/dist/flickity.pkgd.min.js',
                        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
                        'assets/js/helpers.js',
                        'assets/js/analytics.js',
                        'assets/js/index.js',
                    ]
                }
            }
        },

        // compile sass
        sass: {
            dist: {
                options: {
                    lineNumbers: true,
                    style: 'expanded',
                    sourcemap: 'auto',
                },
                files: {
                    'assets/css/core.css': 'assets/css/core.scss'
                }
            }
        },

        // minify css
        cssmin: {
            options: {
                sourceMap: 'auto',
                rebase: true
            },
            dist: {
                files: {
                    'assets/min/styles.min.css': [
                        'assets/css/normalize.css',
                        'assets/css/bootstrap-grid.css',
                        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
                        //'node_modules/aos/dist/aos.css',
                        //'node_modules/flickity/dist/flickity.min.css',
                        'assets/css/core.css',
                        'assets/css/print.css'
                    ]
                }
            }
        },


        // run tasks again on changes in js and css files
        watch: {
            assets: {
                files: [
                    'Gruntfile.js',
                    'assets/js/*.js',
                    'assets/css/*.css',
                    'assets/css/*.scss',
                    'assets/css/*/*.scss'
                ],
                tasks: [
                    'uglify',
                    'sass',
                    'cssmin'
                ]
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'watch']);
    grunt.registerTask('assets', ['uglify', 'sass', 'cssmin', 'watch:assets']);
};
