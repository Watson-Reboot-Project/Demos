/**
 * Watson Reboot Project
 * demo/angularjs/js/DemoApp.js
 * Tommy Bozeman (tboz203)
 * 2013/12/22
 *
 * A demo of some common Angular.js uses. These are pulled almost directly from
 * the angularjs.org website.
 */

// the first and last lines encapsulate everything we do in our own little
// namespace, so that we don't pollute the global scope. this isn't
// particularly important here, (the only thing we declare is `app`) but it's
// good practice. what we're doing is declaring a function that does everything
// we want to do, and then immediately calling that function. for more things
// like this, check out:
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
;(function() {

    // we declare an `app` that will contain everything that we deal with in this
    // demo project.
    var app = angular.module('DemoApp', []);

    // In this demo, we're only going to need a single controller.
    // the `$scope` that you see getting passed into our function is where we're
    // going to put everything we want to be visible in the html.
    app.controller('TodoController', function($scope) {

        // an array of `todo` objects. these two are the starting entries
        $scope.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}
        ];

        // a function to add entries to the `todos` array
        // gets fired when the `add` button is pressed
        $scope.addTodo = function() {
            // append an object literal to the array
            $scope.todos.push({text:$scope.todoText, done:false});
            // reset the input box
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
            });
        };

    });
})();
