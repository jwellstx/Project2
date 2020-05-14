$(".rentMe").on("click", function (e) {
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
    $("#userName2").html(checkUserFirstName + " " + checkUserLastName).val(checkUserFirstName + " " + checkUserLastName);
    $("#customerID").html("Customer Id:"+checkCustomerID).val(checkCustomerID);
    $("#carPrice").html("Price:"+carPrice).val(carPrice);
    $("#carID").html("Car Id:"+carId).val(carId);
  }
  else {
    e.stopPropagation();  // prevents modal from popping up if not logged in.
    alert("You are either not logged on or a registered user! Please login/register to continue!");
  }
});

$("#return").on("click", (e) => {
  // this function is to direct the user to their return page
  e.preventDefault();
  var customerId = localStorage.getItem("customerID");
  window.location.assign("/return?id=" + customerId);
});

console.log("In Login Account!");

$("#myModal").on("click", "#rentIt", function(e) {
  e.preventDefault();

  var transaction = {
    rentalStatus: "1",
    pricePaid: $("#carPrice")
      .val()
      .trim(),
    CustomerId: $("#customerID")
      .val()
      .trim(),
    CarId: $("#carID")
      .val()
      .trim()
  };

  API.createTransaction(transaction).then(function(apIresponse) {
    console.log(apIresponse);
    if (apIresponse === 1) alert("Sorry, car is already rented!!");
    else {
      // why is this never hit?
      alert("Succesfully rented!!");
      // $("#myModal").toggle();
    }
  });

})

var $LoginBtn = $("#login");

var API = {
  returningCustomer: function (customer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "login",
      data: JSON.stringify(customer)
    });
  },
  createTransaction: (transaction) => {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/rent",
      data: JSON.stringify(transaction)
    });
  }
};

var handleFormSubmit = function (event) {
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
    API.returningCustomer(customer).then(function(apIresponse) {
      console.log(apIresponse, "result");
      localStorage.setItem("customerFirstName", apIresponse.customerMatch.firstName);
      localStorage.setItem("customerLastName", apIresponse.customerMatch.lastName);
      localStorage.setItem("customerID", apIresponse.customerMatch.customerId)
      window.location.assign("/");
  
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

    $("#logout").on("click", () => {
      localStorage.clear();
      window.location.assign("/");
      $(".return-login").hide();
      $(".userForm").show();
    })
  }
  else {
    $LoginBtn.on("click", handleFormSubmit);
  }
});
