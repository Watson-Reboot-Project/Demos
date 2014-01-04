/**
 * Watson Reboot Project
 * demo/requirejs/js/path/to/module2.js
 * Tommy Bozeman (tboz203)
 * 2014/01/03
 *
 * A demo project, showing the most basic usages of require.js. code sampled from
 * http://www.ringabell.org/en/un-simple-guide-pour-debuter-avec-requirejs/
 */

define(['module1'], function(module1ref) {
    var module = function() {
        var module1 = new module1ref();

        this.getModule1Name = function() {
            return module1.getName();
        }
    }

    return module;
});

