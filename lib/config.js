'use strict';

var deepExtend = require('deep-extend');

/**
 * Creates a new Config object to handle the initialization, validation, and
 * parsing of express-stormpath configuration data.
 *
 * @public
 * @class
 */
function Config(data) {
  deepExtend(this, data);
}

module.exports = Config;
