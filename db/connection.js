const knex = require('knex');
const conf = require('../knexfile');

const env = process.env.NODE_ENV || 'development';
const connector = conf[env];

module.exports = knex(connector);
