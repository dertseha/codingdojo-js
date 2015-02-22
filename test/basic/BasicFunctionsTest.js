/* global global, describe, it, expect, sinon */
var basic = require(global.resolveSource("basic/BasicFunctions.js"));

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

describe("BasicComponent", function() {

  it("should have a testFunction1 function", function() {
    expect(basic.testFunction1).to.be.a("function");
  });

  describe("testFunction1()", function() {
    it("should return the parameter with an exclamation mark", function() {
      var result = basic.testFunction1("It works");

      expect(result).to.be.equal("It works!");
    });

  });

  it("should have a testFunction2 function", function() {
    expect(basic.testFunction2).to.be.a("function");
  });

  describe("testFunction2()", function() {
    it("should call the parameter function", function() {
      var dummy = sinon.spy();

      basic.testFunction2(dummy);

      expect(dummy).was.called();
    });

    it("should return the result of the parameter function", function() {
      var callback = sinon.stub().returns(42);

      var result = basic.testFunction2(callback);

      expect(result).to.be.equal(42);
    });
  });
});
