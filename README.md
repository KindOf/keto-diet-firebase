# keto-diet-firebase

firebase project for keto-diet
## Prerequisite:

 - Node JS and npm
 - Firebase-tools

## Installation:
*Clone the repository and install dependencies:*
	
    $ git clone https://github.com/KindOf/keto-diet-firebase.git
    $ cd keto-diet-firebase
    $ npm install
*Add firebase project*


    firebase use --add [your-project-id]
 *Configure your project with credentials*


    firebase functions:config:set sendinblue.url="[sendinblue-api-url]"
    firebase functions:config:set sendinblue.apikey="[your-api-key]"
    firebase functions:config:set drip.accountid="[drip-account-id]"
    firebase fucntions:config:set drip.token="[drip-api-token]"
*Deploy:*

    firebase deploy
