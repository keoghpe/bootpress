// To do:
// grunt sass
// bootstrap
// livereload
// wiredep
//


module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', 'js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      sass: {
        files: ['./**/*.scss'],
        tasks: ['sass:dev'],
        options: {
          livereload: 35729
        }
      },
      php: {
        files: ['**/*.php'],
        options: {
          livereload: 35729
        }
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        options: {
          livereload: 35729
        }
      }
    },
    sass: {
      options: {
        sourceMap: true,
        includePaths: ['bower_components']
        },
      dev: {
        files: [
          {
            src: ['**/*.scss'],
            cwd: 'sass',
            dest: '.',
            ext: '.css',
            expand: true
          }
        ],
        options: {
          style: 'expanded',
          compass: true
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);

};
