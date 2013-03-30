module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      // options: {
      //   separator: ''
      // },
      dist: {
        src: ['js/src/app.js', 'js/src/controllers/*.js', 'js/src/filters/*.js', 'js/src/services/*.js', 'js/src/directives/*.js'],
        dest: 'js/src/build/app.built.js'
      }
    },

    ngmin: {
      controllers: {
        src: ['js/src/build/app.built.js'],
        dest: 'js/src/build/app.built.annotate.js'
      }
    },

    jshint: {
      all: ['js/src/**/**.js']
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/build/app.min.js': ['js/src/build/app.built.annotate.js']
        }
      }
    },

    watch: {
      src: {
        files: ['js/src/*.js'],
        tasks: ['default']
      }
    }

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Define your tasks here
  grunt.registerTask('concatme', ['concat']);
  grunt.registerTask('ngminme', ['ngmin']);
  grunt.registerTask('uglifyme', ['uglify']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', ['concat', 'ngmin', 'uglify']);

};