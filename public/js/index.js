$(".rentMe").on("click", function() {
  var carMake = $(this).attr("data-make");
  var carModel = $(this).attr("data-model");
  $(".modal-title").text(carMake + " " + carModel);
  $(".rentalCar").attr("src", "/img/" + carModel + ".jpg");
});

// The API object contains methods for each kind of request we'll make
// Note needed but keeping for reference
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var API = {
     saveCustomer: function(customer) {
       return $.ajax({
         headers: {
         "Content-Type": "application/json"
        },
         type: "POST",
        url: "member",
        data: JSON.stringify(customer)
      });
     
    },
    getCustomer: function() {
          return $.ajax({
            url: "member",
             type: "GET"
          });
        }
   };

   
        
      
   
  





   var handleFormSubmit = function(event) {
    event.preventDefault();
  
    var customer = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      phone:$("#phone").val().trim(),
      driversLicenseNo:$("#driversLicenseNo").val().trim(),
      driversLicenseState:$("#driversLicenseState").val().trim()
      
    };
  
    
  
    API.saveCustomer(customer).then(function(apIresponse) {
      console.log(apIresponse,"result");
     
    });
  
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
    $("#phone").val("")
    $("#driversLicenseNo").val("");
    $("#driversLicenseState").val("");
  };
   $submitBtn.on("click", handleFormSubmit);