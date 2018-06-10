const client = require('drip-nodejs')({
	accountId: '9169097',// TODO: functions.config().drip.apikey,
	token: '9c6ad88a73fe2cd454d520ef581d2002' // TODO: functions.config().drip.accid
});

const dripHandler = event => {
	const payload = {
		subscribers: [{
			email: "john@acme.com",
			time_zone: "America/Los_Angeles",
			custom_fields: {
				name: "John Doe"
			}
		}]
	};

	client.createUpdateSubscriber(payload)
		.then((response) => {
			// Handle `response.body`
			console.log(response.body)
		})
		.catch((error) => {
			// Handle errors
			console.error(error)
		});
}

exports = dripHndler;