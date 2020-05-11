var db= require("../models");
const bcrypt=require("bcryptjs");
const {Op}=require("sequelize");


module.exports= function(app){

    app.get("/member", function(req, res) {
     res.render("index", { firstName: req.body.firstName, lastName :req.body.lastName });
      });
      
    app.post("/member",(req,res)=>{
      
        db.Customer.findOne({
          where: 
          { 
            [Op.or]: [{email: req.body.email}, {driversLicenseNo: req.body.driversLicenseNo}]
            
           }
      }).then(function (customer) {
          console.log(customer, 'THE CUSTOMER!');
          if (customer) {
             console.log("Th consois email is already taken/Driver license is already taken")
             return res.json({userExists: true} )
          } else {
              req.body.password = bcrypt.hashSync(req.body.password);
              var data = req.body;
  
             db.Customer.create(data).then(function (newCustomer) {
                 res.json(newCustomer)
                
  
               });
              }
        });
      })
 
};