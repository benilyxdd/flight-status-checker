// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { firebase_api_key } from './env';

export const environment = {
	production: false,
	firebase: {
		apiKey: firebase_api_key,
		authDomain: 'planes-status-checker.firebaseapp.com',
		projectId: 'planes-status-checker',
		storageBucket: 'planes-status-checker.appspot.com',
		messagingSenderId: '836075622606',
		appId: '1:836075622606:web:d934049e01af269860009f',
		measurementId: 'G-MN0HBMQZRD',
	},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
