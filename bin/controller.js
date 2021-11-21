#!/usr/bin/env node
const { Users } = require('../model/Users');
const { checkParams } = require('../util/checkParams');

class Controller {
  constructor() {}

  async set(name, value) {
    checkParams(name);
    checkParams(value);
    Users.create(name, value);
    return;
  }

  get(name) {
    checkParams(name);
    Users.read(name);
    return;
  }

  async delete(name) {
    checkParams(name);
    Users.delete(name);
  }
  async count(value) {
    checkParams(value);
    Users.count(value);
  }
  async end() {}
}
module.exports = { Controller };
