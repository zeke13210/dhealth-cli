const loki = require('lokijs');
const { db } = require('../model/db');
//console.log('users lin3 db: ', db);
const Users = {
  create: function (name, value) {
    try {
      db.loadDatabase({}, function () {
        const items = db.getCollection('items');
        const result = items.find({ name: name });
        if (result.length < 1) {
          const newUser = items.insert({ name: name, value: value });
        } else {
          console.log(`user with name ${name} exists`);
        }
      });
    } catch (error) {
      console.log('error: ', error.message);
    }
  },

  read: function (name) {
    db.loadDatabase({}, function () {
      const items = db.getCollection('items');
      const result = items.findOne({ name: name });
      if (result) {
        console.log(result.value);
      } else {
        console.log(null);
      }
      return;
    });
  },
  count: function (value) {
    db.loadDatabase({}, function () {
      const items = db.getCollection('items');
      const result = items.find({ value: value });
      console.log(result.length);
      return;
    });
  },
  delete: function (name) {
    try {
      db.loadDatabase({}, function () {
        const items = db.getCollection('items');
        const result = items.findAndRemove({ name: name });
      });
    } catch (error) {
      console.log('error: ', error.message);
    }
  }
};

module.exports = { Users };
