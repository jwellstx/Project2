var db = require("../models");
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Cars.findAll({
      where: req.body
      // include: {
      //   model: db.Transaction,
      // }
    }).then(function (rows) {
      // var nonRentedCars = [];
      // for (x = 0 ; x < rows.length ; x ++){
      //   if (rows[x].Transaction && rows[x].Transaction.rentalStatus) continue;
      //   else nonRentedCars.push(rows[x]);
      // }
      res.render("index", { cars: rows.map(car => car.toJSON()), vehicleType: "All Vehicles" });
    });
  });

  app.post("/", function (req, res) {
    var query = {};
    if (req.body.vehicle !== "Vehicle Type") query.vehicleType = vehicleTypeActual = req.body.vehicle;
    else vehicleTypeActual = "All Vehicles";  // added just for the display
    if (req.body.color !== "Color") query.color = req.body.color;

    if (req.body.priceRange !== "Price Range") {
      var range = req.body.priceRange.split("-");
      minPrice = range[0];
      maxPrice = range[1];
      query.pricePerDay = { [op.between]: [minPrice, maxPrice] };
    }

    db.Cars.findAll({
      where: query
    }).then(function (rows) {
      res.render("index", { cars: rows.map(car => car.toJSON()), vehicleType: vehicleTypeActual });
    });
  });

  app.get("/member", (req, res) => {
    res.render("memberAccount");
  });

  app.get("*", function (req, res) {
    res.render("404");
  });
};
