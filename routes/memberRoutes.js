var db= require("../models");
const bcrypt=require("bcryptjs");
const {Op}=require("sequelize");


module.exports= function(app){

    app.get("/member", function(req, res) {
     // res.render("index", { user :newCustomer });
      });
      
    app.post("/member",(req,res)=>{
      
        db.Customer.findOne({
          where: 
          { 
            [Op.or]: [{email: req.body.email}, {driversLicenseNo: req.body.driversLicenseNo}]
            
           }
      }).then(function (customer) {
          //console.log(user);
          if (customer) {
              console.log("This email is already taken/Driver license is already taken")
              res.redirect("/member")
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