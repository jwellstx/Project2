var db = require("../models");
const bcrypt = require("bcryptjs");



module.exports = function (app) {
  
  app.get("/login", function(req, res) {
   console.log('Inside Login', req.body);
  // res.render("index", { firstName: req.body.firstName, lastName :req.body.lastName });*/
  // res.send("hola")
   });

  app.post("/login", (req, res) => {
      
   db.Customer.findOne({
    where : {
        email: email.req.body
    }
    }).then(customer=>{
        console.log(customer, 'THE CUSTOMER!');

        if(customer){

       var existPassword= bcrypt.compareSync(req.body.password,customer.password);

       if(existPassword){
        var customerMatch={
            firstName : customer.firstName,
            lastName : customer.LastName,
            CorrectEmail:true,
            existPassword:true
        }
        res.json({customerMatch})
 
       }else{
           res.json({
               CorrectPassword:false
           })
       }
       
        }else{
            res.json({
                CorrectEmail: false
            })
        }
    
    })
    
})

};