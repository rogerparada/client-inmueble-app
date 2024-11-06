// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config: {
      apiKey: 'AIzaSyBMtaaK38IZjGkq-LJtQc3MqAbSB4XocpA',
      authDomain: 'edificacion-app-fe698.firebaseapp.com',
      projectId: 'edificacion-app-fe698',
      storageBucket: 'edificacion-app-fe698.appspot.com',
      messagingSenderId: '258836768233',
      appId: '1:258836768233:web:b1cb6af372c17fd3b0d778',
    },
  },
  url: 'http://localhost:5202',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
