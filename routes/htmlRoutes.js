var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
     db.Cars.findAll({}).then(function(rows) {
        res.render("index", { coupes: rows.map(car => car.toJSON()), SUV: rows.map(car => car.toJSON()), Exclusive: rows.map(car => car.toJSON()) });
      });
  });

  app.get("/member",(req,res)=>{
    res.render("memberAccount")
  });
  
  app.get("*", function(req, res) {
    res.render("404");
  });
};
