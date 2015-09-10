'use strict';

var assert = require('assert');

var Config = require('../index');

describe('Config', function() {
  describe('#()', function() {
    it('should accept no input', function() {
      assert.doesNotThrow(function() {
        var config = new Config();
      }, Error);
    });

    it('should accept json input', function() {
      assert.doesNotThrow(function() {
        var config = new Config({ hi: 'there' });
      }, Error);
    });

    it('should bind all passed values to itself', function() {
      var config = new Config({ hi: 'there', yo: 'momma', test: { nested: 'stuff' } });
      assert.equal(config.hi, 'there');
      assert.equal(config.yo, 'momma');
      assert.deepEqual(config.test, { nested: 'stuff' });
    });

    it('should bind additional properties to itself', function() {
      var config = new Config({ hi: 'there' });
      config.yo = 'momma';
      assert.equal(config.hi, 'there');
      assert.equal(config.yo, 'momma');
    });
  });
});
