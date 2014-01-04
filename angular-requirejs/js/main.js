/**
 * Watson Reboot Project
 * demo/angularjs-requirejs/js/main.js
 * Tommy Bozeman (tboz203)
 * 2013/12/19
 *
 * A test project, making sure I can use require.js and angular.js together.
 */

// require.js's configuration block. setting up paths
require.config({
    // it seems really weird to me that this is necessary right here. methinks
    // it's because here it means relative to index.html, whereas otherwise it
    // would be relative to this file?
    baseUrl: 'js/',
    // the locations of things starting with names like `angular`, `less`, etc.
    // for instance, if lib/js/angular was a directory, angular/angular-ui
    // would get you lib/js/angular/angular-ui. however, in this case, angular
    // is just a regular javascript file.
    paths: {
        angular:        '../lib/js/angular',
        bootstrap:      '../lib/js/bootstrap-3',
        jquery:         '../lib/js/jquery',
        less:           '../lib/js/less',
        'ui-bootstrap': '../lib/js/ui-bootstrap'
    },
    // not 100% certain why this is required, but I do know it doesn't work
    // otherwise.
    shim: {
        angular: {exports: 'angular'},
        'ui-bootstrap': {deps: ['angular']}
    }
});

// the top-level piece. require (provided by require.js) pulls in what pieces
// you ask for (the list) and calls the function you provide when they're
// ready.
require(['angular', 'testApp'], function(angular) {
    // start angular
    angular.bootstrap(document, ['TestApp']);
});

