# keto-diet-firebase

firebase project for keto-diet project
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
 *Configure your project with sendinblue credentials*
 

    firebase functions:config:set sendinblue.url="[sendinblue-api-url]"
    firebase functions:config:set sendinblue.apikey="[your-api-key]"
*Deploy:*

    firebase deploy