export enum DataServiceType {
  http = 'HTTP',
  firebase = 'FIREBASE',
}

export const apiUrl = 'assets/misc/data.json';
// export const apiUrl = 'https://s3.amazonaws.com/xxxxx/data.json';

export const firebaseConfig = {
  // This is a placeholder. Replace with real values.
  apiKey: 'xxxxxxxxxxx',
  authDomain: 'xxxxxxxxx-xxxxxxx-xxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxxxxx-xxxxxxx-xxxxx.firebaseio.com',
  storageBucket: 'xxxxxxxxx-xxxxxxx-xxxxx.appspot.com',
  messagingSenderId: '123456789',
};

export const DATA_SERVICE: DataServiceType = DataServiceType.http;

export const appTitle = 'Conference 5';
