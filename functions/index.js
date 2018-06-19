const functions = require('firebase-functions');

const dripModule = require('./drip/drip-handler');
const sibModule = require('./sendinblue/sendinblue-handler');

const DATABASE = '/users/{id}';

exports.sendinblueHandler = functions.database.ref(DATABASE)
  .onUpdate(sibModule.sibHandler);

exports.dripHandler = functions.database.ref(DATABASE)
  .onUpdate(dripModule.dripHandler);
