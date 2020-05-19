# Project2 - Hot Wheels

<b>Hot Wheels</b> is a luxury car rental application hosted on Heroku. The app allows users to browse available cars, filter on various attributes, register as a new user or login as an existing user, rent the car and return it in the system when fininshed.

## Project Team:</b><br>
### Scott Bayreder<br>
### Gabrielle Byers<br>
### Idalmys Maza<br>
### Justin Wells<br><br>

## Technologies Used:</b><br>
`HTML`<br>
`CSS`<br>
`Node`<br>
`Express`<br>
`Sequelize ORM`<br>
`MySQL`<br>
`Pure CSS`<br>
`JQuery AJAX`<br>
`Handlebars`<br>
`ESLint`<br>
`Pure CSS`<br>
`Bootstrap`<br>
`ClearDB`<br>
`BCrypt Library`<br>
`Mocha/Chai/Chai HTTP`<br>
`Heroku`<br><br>


## How It Works:</b><br>

<b>HTML (3 routes):</b> used to render our landing page handlebar file, member registration handlebar file and a catch all 404 page.<br>
<b>Login (1 route):</b> includes a Get route that checks if user is registered in our database then will log them in successfully.<br>
<b>Register (1 route):</b> includes a post route which will create a new user in the database if the user doesn't already exist.<br>
<b>Rental/Return (3 routes):</b> A post request to see if a car is already rented when user wants to rent a car, a get request to display a user's current rentals on the return page. and a put request to update rental status if a user returns a car.

# Demo Link

https://mysterious-gorge-05604.herokuapp.com/
