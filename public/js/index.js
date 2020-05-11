$(".rentMe").on("click", function() {
  var carMake = $(this).attr("data-make");
  var carModel = $(this).attr("data-model");
  $(".modal-title").text(carMake + " " + carModel);
  $(".rentalCar").attr("src", "/img/" + carModel + ".jpg");
});

console.log("In Login Account!");

var $LoginBtn = $("#login");
var $returLogin = $(".return-login");
var API = {
  saveCustomer: function(customer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "login",
      data: JSON.stringify(customer)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "login",
      type: "GET"
    });
  }
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var customer = {
    email: $("#email")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };

  API.saveCustomer(customer).then(function(apIresponse) {
    console.log(apIresponse, "result");

    $("#email").val("");
    $("#password").val("");
  });
};

var Handlecustomers = function() {
  API.getCustomer().then(function(data) {
    var $p = $("<p>").text(data.firstName + data.lastName);
    $returLogin.append($p);
  });
};
$(document).ready(function() {
  var checkUserFirstName = localStorage.getItem("customerFirstName");
  var checkUserLastName = localStorage.getItem("customerLastName");
  if (checkUserFirstName && checkUserLastName) {
    $("#userName").html(checkUserFirstName + " " + checkUserLastName);
    $(".userForm").hide();
  }
  else {
    $LoginBtn.on("click", handleFormSubmit);
  }
});
