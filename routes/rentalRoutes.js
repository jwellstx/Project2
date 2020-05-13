var db = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function(app) {
  // Get all examples
  // this one is just for debug - delete for production
  app.get("/justin", function(req, res) {
    db.Transaction.findAll({include: [db.Customer, db.Cars]}).then(function(dbExamples) {
      console.log(dbExamples);
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/rent", function(req, res) {
    db.Transaction.count({
      where: {
        [Op.and] : [{rentalStatus: "rented"}, {carId: req.body.CarId}]
      }
    }).then(count => {
      if (count > 0) {
        console.log("Car is currently being rented");
        res.json(count);
      }
      else {
        db.Transaction.create(req.body).then(function(dbTransaction) {
          res.json(dbTransaction.Id);
        });
      }
    });
  });
}
