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
  getExamples: function() {
    return $.ajax({
      url: "members",
      type: "GET"
    });
  }
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
    if (apIresponse.userExists) {
      $("#DivError").show();
      $("#error").text("Email address /DL are already taken");
    }
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

var Handlecustomers = function() {
  API.getCustomer().then(function(data) {
    var $p = $("<p>").text(data.firstName + data.lastName);
    $returLogin.append($p);
  });
};

$(document).ready(function() {
  $("#DivError").hide();
  $submitBtn.on("click", handleFormSubmit);
});
