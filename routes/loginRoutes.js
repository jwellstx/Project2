var db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = function (app) {
    // post route to take in users email/password and check the db if their credentials match
    // if so, log them in, if not return either bad email or password
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
                    return res.json({ customerMatch, correctCredentials: true });
                } else {
                    return res.json({ correctCredentials: false });
                }
            } else {
                return res.json({ correctCredentials: false });
            }
        });
    });
};