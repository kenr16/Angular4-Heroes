# SuperheroTeam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.  Superhero team an app that displays a list of various superheroes from the Marvel universe and bios, stats and superpowers.  This app will allow for full CRUD functionality on the superhero entries.  Because of the fact that user authentication has been enabled, creating a firebase database, populating it with JSON data, then allowing for login using email and passwords are required.

## Running

git clone https://github.com/kenr16/Angular4-Heroes
cd Angular4-Heroes
npm install
bower install
bower install bootstrap --save
apm install atom-typescript

You may also need to run the line in order to get the firebase database working properly.:

npm install promise-polyfill --save-exact

Log into firebase and og to your console, create a new project.  Click on database and then populate the new project with the sample-heroes.json file located in the parent folder of this project.  Click on the 'rules' tab and set both read and write to equal true.  Click on the authentication tab on the left, and under the blue users tab, add a new user with an e-mail and password of your choice.  From there, click on the blue Sign-In method tab right next to the users tab.  Set Email/Password option to be enabled.  Click on the 'Web Setup' option in the upper righthand corner, use the information from the modal that pops up to populate the api-keys.ts file, which you should create in your 'src' folder with the following format:

export var masterFirebaseConfig = {
  apiKey: "YOURAPIKEY",
  authDomain: "YOURPROJECTDOMAIN.firebaseapp.com",
  databaseURL: "https://YOURPROJECTDATABASEURL.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "YOURID"
};

Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Known Bugs

There are currently no known bugs. If you discover a bug, please raise an issue here.

## Support and contact details

For further support, please contact Ken Rutan via his Github account.  E-mail will not be listed here as this README is publicly displayed.

## Technologies Used

This website was constructed using HTML, CSS and Javascript as well as jQuerey elements running on Angular2 framework.

## License

&copy; _year_ Ken Rutan _MIT_  **MIT License**
