const functions = require('firebase-functions');
const request = require('request-promise');

const baseURL = functions.config().sendinblue.url;
const apikey = functions.config().sendinblue.apikey;

const sibHandler = event => {
  const user = event.data.val();

  console.log('User:', user);

  return request({
    method: 'POST',
    uri: baseURL + 'contacts',
    body: {
      email: user.email,
      attributes: {"FIRSTNAME": user.username},
      listIds: [4]
    },
    headers: {
      'api-key': apikey,
      'Content-Type': 'application/json'
    },
    json: true
  })
    .then(res => {
      console.log('Contact added:', res);

      return;
    })
    .catch(err => {
      console.log('ERROR', err);

      return;
    });
}

exports.sibHandler = sibHandler;
