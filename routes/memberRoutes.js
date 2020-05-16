var db = require("../models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

module.exports = function (app) {
  // post route that take in all the user registration information and create a new user in the database
  // return new user information to update that they are logged in
  app.post("/members", (req, res) => {
    db.Customer.findOne({
      where: {
        [Op.or]: [{
          email: req.body.email
        }, {
          driversLicenseNo: req.body.driversLicenseNo
        }]
      }
    })
      .then(function (customer) {
        if (customer) {
          return res.json({
            userExists: true
          })
        } else {
          req.body.password = bcrypt.hashSync(req.body.password);
          var data = req.body;

          db.Customer.create(data).then(function (newCustomer) {

            var customerResponseObj = { 
              customerId: newCustomer.id,
              driversLicenseNo: newCustomer.driversLicenseNo,
              email: newCustomer.email,
              firstName: newCustomer.firstName,
              lastName: newCustomer.lastName,
              phone: newCustomer.phone,
              updatedAt: newCustomer.updatedAt,
              userExists: false,
            }

            res.json(customerResponseObj);  // need newCustomer to get id
          });
        }
      });
  });
};