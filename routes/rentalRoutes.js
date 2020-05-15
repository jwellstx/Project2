var db = require("../models");

module.exports = function (app) {
  // Get all examples
  // this one is just for debug - delete for production
  app.get("/justin", function (req, res) {
    db.Transaction.findAll({ include: [db.Customer, db.Cars] }).then(function (dbExamples) {
      console.log(dbExamples);
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/rent", function (req, res) {
    db.Transaction.count({
      where: {
        rentalStatus: "1",
        carId: req.body.CarId
      }
    }).then(count => {
      if (count > 0) {
        console.log("Car is currently being rented");
        res.json(count); // this will be > 0 if rented (ideally only every '1' otherwise car if rented twice)
      }
      else {
        db.Transaction.create(req.body).then(function (dbTransaction) {
          res.json(0);
        });
      }
    });
  });

  app.get("/return", (req, res) => {
    var customerId = req.query.id;

    if (req.query.id) {
      db.Transaction.findAll({
        include: [db.Cars, db.Customer],
        where: {
          CustomerId: customerId,
          rentalStatus: 1
        }
      }).then(rows => {
        console.log(rows);
        if (rows.length !== 0) {
          res.render("return", { rentals: rows.map(rental => rental.toJSON()) });
        }
        else {
          // customer has no cars to return
          res.redirect("/");
        }
      });
    }
    else {
      // if id is not valid redirect to home page
      res.redirect("/");
    }
  });

  app.put("/return", (req, res) => {
    db.Transaction.update({
      rentalStatus: "0"
    }, {
      where: {
        id: req.body.transactionId
      }
    }).then(response => {
      res.json(response);
    })
  })
}
