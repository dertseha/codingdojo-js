/* global global, describe, beforeEach, it, expect, sinon */
var BasicObject = require(global.resolveSource("basic/BasicObject.js"));

/*
 * Tests are run using describe() and it() . Each it() is one test-case,
 * each describe() a collection of tests.
 * To limit the test-run to just one specific group or case, append ".once",
 * e.g.: it.once("should work", function() { ... } );
 *
 * Assertions are done using expect.js
 * https://github.com/LearnBoost/expect.js/
 *
 * Spy/Mock/Stub framework is sinon.js
 * http://sinonjs.org/
 * augmented for use with expect.js by https://github.com/lightsofapollo/sinon-expect
 */

describe("BasicObject", function() {
  var basicObject;

  beforeEach(function() {
    basicObject = new BasicObject(1234);
  });

  it("should have a getter function", function() {
    expect(basicObject.getValue()).to.be.eql(1234);
  });
});
