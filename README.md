# Project2

Hot Wheels is a luxury car rental application hosted on Heroku. The app allows users to browse available cars, filter on various attributes, register as a new user or login as an existing user, rent the car and return it in the system when fininshed.

Project Team:
Scott Bayreder
Gabrielle Byers
Idalmys Maza
Justin Wells

Technologies Used:
HTML
CSS
Node
Express
Sequelize ORM
MySQL
Pure CSS
JQuery AJAX
Handlebars
ESLint
Pure CSS
Bootstrap
ClearDB
BCrypt Library
Mocha/Chai/Chai HTTP
Heroku


How It Works:

HTML (3 routes): used to render our landing page handlebar file, member registration handlebar file and a catch all 404 page.
Login (1 route): includes a Get route that checks if user is registered in our database then will log them in successfully.
Register (1 route): includes a post route which will create a new user in the database if the user doesn't already exist.
Rental/Return (3 routes): A post request to see if a car is already rented when user wants to rent a car, a get request to display a user's current rentals on the return page. and a put request to update rental status if a user returns a car.
