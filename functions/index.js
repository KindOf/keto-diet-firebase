const functions = require('firebase-functions');
const request = require('request-promise');

const dripHandler = require('./drip/drip-handler');
const sibHandler = require('./sendinblue/sendinblue-handler');

const DATABASE = '/users/{id}';

exports.sendinblueHandler = functions.database.ref(DATABASE)
  .onUpdate(sibHandler);

exports.dripHandler = functions.database.ref(DATABASE)
  .onUpdate(dripHandler);
