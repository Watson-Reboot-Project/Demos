/**
 * Watson Reboot Project
 * demo/requirejs/js/module1.js
 * Tommy Bozeman (tboz203)
 * 2014/01/03
 *
 * A demo project, showing the most basic usages of require.js. code sampled from
 * http://www.ringabell.org/en/un-simple-guide-pour-debuter-avec-requirejs/
 */

define([], function() {
    var module = function() {
        var name = 'module 1';

        this.getName = function() {
            return name
        }
    }

    return module;
});
