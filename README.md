# SuperheroTeam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.  Superhero team an app that displays a list of various superheroes from the Marvel universe and bios, stats and superpowers.  This app will allow for full CRUD functionality on the superhero entries.  Because of the fact that user authentication has been enabled, creating a firebase database, populating it with JSON data, then allowing for login using email and passwords are required.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



git clone https://github.com/kenr16/Angular4-Heroes
cd Angular4-Heroes
npm install
bower install
bower install bootstrap --save
apm install atom-typescript

You may also need to run the line:
npm install promise-polyfill --save-exact
In order to get the firebase database working properly.

Open in your text editor of choice. Create a file in the src folder called api-keys.ts with the following:

export var masterFirebaseConfig = {
  apiKey: "YOURAPIKEY",
  authDomain: "YOURPROJECTDOMAIN.firebaseapp.com",
  databaseURL: "https://YOURPROJECTDATABASEURL.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "YOURID"
};

The data above will need to be populated with your Firebase information.

Log in to https://firebase.google.com and create new web app to obtain your API info.

Additionally in your Firebase application you will want to set the following read/write rules for the database:

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
