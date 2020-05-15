// API object to handle returning customer and create transaction route calls
var API = {
  returningCustomer: function (customer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/login",
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

// handle returning customer login credentials
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

  if ($("#email").val() == "" || $("#password").val() == 0) {
    $("#DivError").show();
    $("#error").text("Must enter your information")

  } else {
    API.returningCustomer(customer).then(function (apIresponse) {
      if (apIresponse.correctCredentials) {
        localStorage.setItem("customerFirstName", apIresponse.customerMatch.firstName);
        localStorage.setItem("customerLastName", apIresponse.customerMatch.lastName);
        localStorage.setItem("customerID", apIresponse.customerMatch.customerId);
        $("#userName").html(apIresponse.customerMatch.firstName + " " + apIresponse.customerMatch.lastName);
        $(".userForm").hide();
        $(".return-login").show();
      }
      else alert("Sorry, your email/password is incorrect! Please try again!");

      $("#email").val("");
      $("#password").val("");
    });
  }
};

function setupClickEvents() {
  // handles click function when someone click to view rental information
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
    // check if our user is logged in, else error - cant rent a car if not logged in
    if (checkUserFirstName && checkUserLastName && checkCustomerID) {
      $("#userName2").html(checkUserFirstName + " " + checkUserLastName).val(checkUserFirstName + " " + checkUserLastName);
      $("#customerID").html("Customer Id:" + checkCustomerID).val(checkCustomerID);
      $("#carPrice").html("Price:" + carPrice).val(carPrice);
      $("#carID").html("Car Id:" + carId).val(carId);
    }
    else {
      e.stopPropagation();  // prevents modal from popping up if not logged in.
      alert("You are either not logged on or a registered user! Please login/register to continue!");
    }
  });

  $("#return").on("click", (e) => {
    // this function is to direct the user to their return page based on their customerId
    e.preventDefault();
    var customerId = localStorage.getItem("customerID");
    window.location.assign("/return?id=" + customerId);
  });

  // if a customer decides to rent the car, process the information and add a new transaction
  $("#myModal").on("click", "#rentIt", function (e) {
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

    API.createTransaction(transaction).then(function (apIresponse) {
      if (apIresponse === 1) alert("Sorry, car is already rented!!");
      else {
        alert("Succesfully rented!!");
        location.reload();
      }
    });
  });

  // click to handle when the user wants to log out
  $(".anchor").on("click", "#logout", () => {
    localStorage.clear();
    $(".return-login").hide();
    $(".userForm").show();
  });

  // click event to handle when the user want to relogin (existing user)
  $(".anchor").on("click", "#login", handleFormSubmit);
}

$(document).ready(function () {
  var $LoginBtn = $("#login");

  $(".return-login").hide();
  $("#DivError").hide();
  var checkUserFirstName = localStorage.getItem("customerFirstName");
  var checkUserLastName = localStorage.getItem("customerLastName");
  var checkCustomerID = localStorage.getItem("customerID");
  // if a user has already been logged in keep them logged in - ideally should use cookies rather than local storage
  if (checkUserFirstName && checkUserLastName && checkCustomerID) {
    $("#userName").html(checkUserFirstName + " " + checkUserLastName);
    $(".userForm").hide();
    $(".return-login").show();
  }

  setupClickEvents();
});
