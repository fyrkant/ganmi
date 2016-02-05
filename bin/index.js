#! /usr/bin/env node
const ganmi = require('./ganmi');
const fs = require('fs');

ganmi(process.argv.slice(2), fs);