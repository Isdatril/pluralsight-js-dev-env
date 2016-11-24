//this file isn't transpiled, so must use commonjs and es5'

//register babel to tranpilse before our test run

require('babel-register')();

//disable webpack features that mocha dosn't understand
require.extensions['.css'] = function(){};
