const loki = require('lokijs');
var db = new loki('users.json', {
  autosave: true,
  autosaveInterval: 4000
});

module.exports = { db };
