var chai = require('chai');
var assert = chai.assert;
var boggle = require('./boggle.js');
var chainFinder = require('./chainFinder.js');

describe('Boggle', function() {
  xdescribe('board contents', function() {
    it('should return a board with values between 1 and the board width of 9, inclusive', function() {
      boggle.integers.forEach(function(item) {
        assert.isAtMost(item, 9, 'generated number is less than or equal to 9');
      })
    });
  });
});

describe('Found Integer Chains', function() {
  let grid = [
    [9,4,6],
    [8,1,0],
    [3,7,2]
  ]
  let chains = [
    '0 + 1 + 8 = 9',
    '1 + 8 = 9',
    '0 + 1 + 2 + 6 = 9',
    '0 + 2 + 7 = 9',
    '2 + 7 = 9'
  ]
  it('should output correct paths', function() {
    assert.sameDeepMembers(chains, chainFinder.traverser(grid));
  });
  it('shouldn\'t output duplicate paths', function() {
    assert.deepEqual(chainFinder.traverser(grid), chains)
  })
});