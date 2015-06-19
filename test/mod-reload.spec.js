/* eslint-env mocha */
'use strict';

var expect = require('chai').expect;
var reload = require('../mod-reload');

describe('mod-reload', function () {
  it('should be a function', function () {
    expect(reload).to.be.a('function');
  });
});
