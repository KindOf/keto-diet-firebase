const functions = require('firebase-functions');
const request = require('request-promise');

const dripHandler = require('./drip/drip-handler');
const sendinblueHandler = require('./sendinblue/sendinblue-handler');

const DATABASE = '/users/{id}';

exports.sendinblueHandler = functions.database.ref(DATABASE)
  .onUpdate(sendinblueHandler);

exports.dripHandler = functions.database.ref(DATABASE)
  .onUpdate(dripHandler);
