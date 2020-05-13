$(".rentMe").on("click", function() {
  var carMake = $(this).attr("data-make");
  var carModel = $(this).attr("data-model");
  var carId = $(this).attr("data-id");
  var carPrice = $(this).attr("data-price");
  $(".modal-title").text(carMake + " " + carModel);
  $(".rentalCar").attr("src", "/img/" + carModel + ".jpg");
  $(".rentIt").attr("data-id", carId);
  $(".rentIt").attr("data-price", carPrice);

  var checkUserFirstName = localStorage.getItem("customerFirstName");
  var checkUserLastName = localStorage.getItem("customerLastName");
  var checkCustomerID = localStorage.getItem("customerID");
  if (checkUserFirstName && checkUserLastName && checkCustomerID) {
    $("#userName2").html(checkUserFirstName + " " + checkUserLastName);
    $("#customerID").html(checkCustomerID);
    $("#carPrice").html(carPrice);
  }
  else {
    alert("You are either not logged on or a registered user! Please login/register to continue!");
  }
});

$(".rentIt").on("click", function() {
  var customerID = localStorage.getItem("customerID");
  var carID = $(this).attr("data-id");
  var carPrice = $(this).attr("data-price");

  // do ajax call to confirm transaction


});

console.log("In Login Account!");

var $LoginBtn = $("#login");

var API = {
  saveCustomer: function(customer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "login",
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
    email: $("#email")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };
  
  if($("#email").val()== "" || $("#password").val()==0 ){
    $("#DivError").show();
    $("#error").text("Must enter your information")
   
  }else{
    API.saveCustomer(customer).then(function(apIresponse) {
      console.log(apIresponse, "result");
  
      $("#email").val("");
      $("#password").val("");
    });
    
  }
  
};

$(document).ready(function() {
  $(".return-login").hide();
  $("#DivError").hide();
  var checkUserFirstName = localStorage.getItem("customerFirstName");
  var checkUserLastName = localStorage.getItem("customerLastName");
  var checkCustomerID = localStorage.getItem("customerID");
  if (checkUserFirstName && checkUserLastName && checkCustomerID) {
    $("#userName").html(checkUserFirstName + " " + checkUserLastName);
    $(".userForm").hide();
    $(".return-login").show();

    $("#logout").on("click",()=>{
      localStorage.clear();
      $(".return-login").hide();
      $(".userForm").show();
    })
  }
  else {
    $LoginBtn.on("click", handleFormSubmit);
  }
});
