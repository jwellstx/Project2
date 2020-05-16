var db = require("../models");

module.exports = function (app) {
  // Post route that simply checks if a car is already rented or not to prevent car from being rented twice
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

  // get route that display which car a user has current rented on the 'return car' handlebar page
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

  // put that update rentalStatus in the transaction DB if user return a car
  app.put("/return", (req, res) => {
    db.Transaction.update({
      rentalStatus: "0"
    }, {
      where: {
        id: req.body.transactionId
      }
    }).then(response => {
      db.Transaction.findOne({
        where: {
          id: req.body.transactionId
        }
      }).then(response2 => {
        // calculate time different and multiple by pricePaid (sometimes giving negative values)
        // var d = new Date(response2.createdAt).getMinutes();
        // var d2 = new Date().getMinutes();
        // var total = (d2 - d) * response2.pricePaid;
        res.json({ totalprice: response2.pricePaid});
      });
    })
  })
}
