#!/usr/bin/env node
const { program } = require('commander');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information');

program.parse(process.argv);