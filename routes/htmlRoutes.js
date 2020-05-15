var db = require("../models");
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Cars.findAll({
      // include: {
      //   model: db.Transaction,
      // }
    }).then(function (rows) {
      // var nonRentedCars = [];
      // for (x = 0 ; x < rows.length ; x ++){
      //   if (rows[x].Transaction && rows[x].Transaction.rentalStatus) continue;
      //   else nonRentedCars.push(rows[x]);
      // }
      res.render("index", { cars: rows.map(car => car.toJSON()) });
    });
});

app.get("/member", (req, res) => {
  res.render("memberAccount")
});

app.get("*", function (req, res) {
  res.render("404");
});
};
