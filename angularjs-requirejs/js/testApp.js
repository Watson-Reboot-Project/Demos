/**
 * Watson Reboot Project
 * demo/angularjs-requirejs/js/testApp.js
 * Tommy Bozeman (tboz203)
 * 2013/12/19
 *
 * A test project, showing off require.js and angular.js together.
 */

// defining a module to be used in main.js. requires angular.js
define(['angular'], function() {
    // angular.js's thing. basically, making an object to hold our entire
    // project (as it relates to angular's stuff). the empty list means we're
    // not pulling in any of angular's sub-pieces
    var app = angular.module('TestApp', []);

    // adding a controller to our app. at present, i've only ever used one
    // controller, but this is (to my understanding) a way to modularize your
    // stuff further. asking for a `$scope` parameter lets us make pieces
    // available in the html
    app.controller('TestController', function($scope) {
        $scope.number = 42;
        $scope.string = 'I\'m a string!';

        $scope.times2 = function(x) {
            return x * 2;
        }

    });
});
