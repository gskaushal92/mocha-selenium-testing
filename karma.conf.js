module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
          // 'node_modules/assert-plus/assert.js',
          // 'node_modules/selenium-webdriver/**/*.js',
          'test_suite/scripts/test_suite_1.js'
            // 'test/*.spec.js'
        ],
        reporters: ['progress'],

        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: false,
        plugins:[
          'karma-mocha',
          'karma-chai',
          'karma-chrome-launcher',
          'karma-phantomjs-launcher'
        ],

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['Chrome']

    });
};
