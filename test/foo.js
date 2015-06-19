'use strict';

var reload = require('./mod-reload');
var now = new Date();

function foo() {
  return now;
}

foo.reload = reload;

module.exports = foo;
