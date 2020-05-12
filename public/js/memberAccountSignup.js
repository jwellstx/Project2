console.log("In member Account signup!");

var $submitBtn = $("#submit");
var $returLogin = $(".return-login");
var API = {
  saveCustomer: function(customer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "members",
      data: JSON.stringify(customer),
      success: (data) => {
        localStorage.setItem("customerFirstName", customer.firstName);
        localStorage.setItem("customerLastName", customer.lastName);
        window.location.assign("/");
      }
    });
  },
  
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var customer = {
    firstName: $("#firstName")
      .val()
      .trim(),
    lastName: $("#lastName")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim(),
    phone: $("#phone")
      .val()
      .trim(),
    driversLicenseNo: $("#driversLicenseNo")
      .val()
      .trim(),
    driversLicenseState: $("#driversLicenseState")
      .val()
      .trim()
  };

  API.saveCustomer(customer).then(function(apIresponse) {
    
    console.log(apIresponse, "result");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
    $("#phone").val("");
    $("#driversLicenseNo").val("");
    $("#driversLicenseState").val("");
  });
};



$(document).ready(function() {
 
  $submitBtn.on("click", handleFormSubmit);
});
