module.exports = function (grunt) {

    grunt.initConfig({
        sass : {
            options: {
                sourceMap: true
            },
            dist   : {
                files: {
                    'static/css/glossary.css': 'assets/sass/glossary.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['assets/**/*.scss'],
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};