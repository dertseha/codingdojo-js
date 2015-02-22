"use strict";
var path = require("path");

// Grunt is a JavaScript task runner, similar to Ant. 
// See http://gruntjs.com/ for details

module.exports = function(grunt) {
  var jsFiles = ["Gruntfile.js", "src/**/*.js", "test/**/*.js"];

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Run JSHint on all sources. JSHint is a linter that checks for specific
    // formatting rules and/or coarse syntax checks. The file ".jshintrc"
    // contains the settings.
    // See http://jshint.org/about/ for details
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: jsFiles
    },

    // JSBeautifier on all sources. This formats the source code according to
    // the settings, stored in ".jsbeautifyrc".
    // See http://jsbeautifier.org/ for details
    jsbeautifier: {
      standard: {
        src: jsFiles,
        options: {
          js: grunt.file.readJSON(".jsbeautifyrc")
        }
      }
    },

    // Run tests using mocha. Mocha is one of the more commonly used test
    // frameworks.
    // See http://visionmedia.github.io/mocha/ for details
    mochaTest: {
      libRaw: {
        options: {
          require: ["./test/testGlobals.js", "./test/testStandard.js"],
          reporter: "spec"
        },
        src: ["test/**/*Test.js"]
      }
    }

  });

  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-mocha-test");

  grunt.registerTask("lint", ["jshint"]);
  grunt.registerTask("format", ["jsbeautifier"]);
  grunt.registerTask("test", ["mochaTest:libRaw"]);
  grunt.registerTask("compile", []);

  grunt.registerTask("default", ["lint", "test", "compile"]);
};
