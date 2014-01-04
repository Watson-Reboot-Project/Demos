/**
 * Watson Reboot Project
 * demo/requirejs/js/main.js
 * Tommy Bozeman (tboz203)
 * 2014/01/03
 *
 * A demo project, showing the most basic usages of require.js. code sampled from
 * http://www.ringabell.org/en/un-simple-guide-pour-debuter-avec-requirejs/
 */

// set up things for require.js
require.config({
    // by default, look for modules here
    baseUrl: 'js/',
    // but for things starting with 'module2', look here
    paths: {
        module2: 'path/to/module2'
    }
});

require(['module1', 'module2'], function(module1ref, module2ref) {
    var module1 = new module1ref(),
        module2 = new module2ref();

    console.log(module1.getName() === module2.getModule1Name());
});
