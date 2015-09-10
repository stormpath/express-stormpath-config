'use strict';

var deepExtend = require('deep-extend');

/**
 * Creates a new Config object to handle the initialization, validation, and
 * parsing of express-stormpath configuration data.
 *
 * @class
 */
function Config(data) {
  deepExtend(this, data);
}

/**
 * @callback validateCallback
 * @param {Error} err - The error (if there is one).
 */

/**
 * Validate this configuration data.
 *
 * @param {validateCallback} callback - The callback that handles the response.
 */
Config.prototype.validate = function(callback) {
  if (!callback) {
    throw new Error('Config.validate() requires a callback.');
  }
};

module.exports = Config;
