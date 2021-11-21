#!/usr/bin/env node

const { argv } = require('process');
const { demandOption, option } = require('yargs');
const yargs = require('yargs');

const { Controller } = require('./controller.js');

const app = new Controller();

const options = yargs
  .usage('Tool used to manage your in memory db')
  .command(
    'get',
    'get record based on name',
    (yargs) => {
      return yargs.option('n', {
        alias: 'name',
        describe: 'get name',
        type: 'string',
        demandOption: true
      });
    },
    (argv) => {
      app.get(argv.n);
    }
  )
  .command(
    'delete',
    'remove name from db',
    (yargs) => {
      return yargs.option('n', {
        alias: 'name',
        describe: 'name to remove',
        type: 'string',
        demandOption: true
      });
    },
    (argv) => {
      app.delete(argv.n);
    }
  )
  .command(
    'count',
    'count occurances of value in db',
    (yargs) => {
      return yargs.option('v', {
        alias: 'value',
        describe: 'value to look for',
        type: 'string',
        demandOption: true
      });
    },
    (argv) => {
      app.count(argv.v);
    }
  )
  .command(
    'set',
    'add new record into the db',
    (yargs) => {
      return yargs
        .option('n', {
          alias: 'name',
          describe: 'name field to add',
          type: 'string',
          demandOption: true
        })
        .option('v', {
          alias: 'value',
          describe: 'value field to add',
          type: 'string',
          demandOption: true
        });
    },
    (argv) => {
      app.set(argv.n, argv.v);
    }
  )
  .demandCommand().argv;
