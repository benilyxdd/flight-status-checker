import { firebase_api_key } from './env';

export const environment = {
	production: true,
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
