var fib = require('../lib/fib');

require('chai').should();

describe('fib', function() {
    it('should have an example test', function() {
        true.should.equal(true);
    });

    // write a couple of your own tests
    // here's an example to get you started:

    it('should be 0 for 0', function() {
        fib(0).should.equal(0);
        fib(2).should.equal(1);
        fib(7).should.equal(13);
        fib(16).should.equal(987);
        fib(25).should.equal(75025);
        //fib(50).should.equal(12586269025);
    });

    // when you are feeling confident, uncomment the following tests
    // that are based on the function description

    describe('examples from the function description', function() {
        [
            [0, 0],
            [2, 1],
            [7, 13],
            [16, 987]
        ].forEach(function(testValues) {
              it('fib(' + testValues[0] + ')', function() {
                  fib(testValues[0]).should.equal(testValues[1]);
              });
          });
    });

    // feeling brave? try writing a test for 25 or 50

});
