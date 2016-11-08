module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      JS : {
        files : {
          'build/js/main.min.js' : [ 'assets/js/main.js' ]
        }
      }
    }, // uglify



    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'build/css/style.min.css' : 'assets/sass/style.scss'
        }
      }
    }, // sass

    copyto: {
    stuff: {
      files: [
        {cwd: 'assets/', src: ['index.html'], dest: 'build/', expand: true}
      ]
    }
  },

    clean: {
      build: {
        src: ['build/']
      }
    },

   watch : {
     dist : {
       files : [
         'assets/js/**/*',
         'assets/sass/**/*',
         'index.html'
       ],

       tasks : [ 'uglify', 'sass']
     }
   } // watch

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks('grunt-copy-to');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks('grunt-contrib-clean');



  // Tarefas que serão executadas
  grunt.registerTask( 'prod', [ 'uglify', 'sass', 'copyto', 'watch' ] );
  grunt.registerTask( 'c', [ 'clean' ] );

};
