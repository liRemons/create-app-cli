#!/usr/bin/env node
const program = require('commander');
const package = require('./package.json');
const createCommands = require('./lib/core/create');

program.version(package.version);

createCommands()

program.parse(process.argv);