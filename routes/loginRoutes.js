var db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = function (app) {


    app.post("/login", (req, res) => {
        db.Customer.findOne({
            where: {
                email: req.body.email
            }
        }).then(customer => {
            // console.log(customer, 'THE CUSTOMER!');
            if (customer) {
                var correctPsw = bcrypt.compareSync(req.body.password, customer.password);

                if (correctPsw) {
                    var customerMatch = {
                        firstName: customer.firstName,
                        lastName: customer.lastName,
                        customerId: customer.id,
                        CorrectEmail: true,
                        existPassword: true
                    }
                    return res.json({ customerMatch });
                } else {
                    return res.json({ CorrectPassword: false });
                }
            } else {
                return res.json({ CorrectEmail: false });
            }
        });
    });
};