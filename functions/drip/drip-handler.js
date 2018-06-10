const functions = require('firebase-functions');

const client = require('drip-nodejs')({
	accountId: functions.config().drip.accountId,
	token: functions.config().drip.token
});

const dripHandler = event => {
	const user = event.data.val();

	const payload = {
		subscribers: [{
			email: user.email,
			custom_fields: {
				name: user.username
			}
		}]
	};

	client.createUpdateSubscriber(payload)
		.then((response) => {
			const subscriber = response.body.subscribers[0]

			console.log('Contact added:', { email: subscriber.email, name: subscriber.custom_fields.name });
		})
		.catch((error) => {
			console.error('ERROR', error)
		});
}

exports = dripHndler;