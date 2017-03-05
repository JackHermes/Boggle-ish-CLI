var chai = require('chai');
var assert = chai.assert;
var boggle = require('./boggle.js');

describe('Boggle', function() {
  describe('board contents', function() {
    it('should return a board with values between 1 and 9, inclusive', function() {
      boggle.integers.forEach(function(item) {
        assert.isAtMost(item, 9, 'generated number is less than or equal to 9');

      })
    });
  });
});