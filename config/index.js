var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return `mongodb://${configValues.dbuser}:${configValues.dbpass}${configValues.dbhost}`;
  }
}