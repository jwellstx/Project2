$(document).ready(function () {
  // click event to handle put route to update rentalStatus when a user wants to return the car
  $(".profileBody").on("click", "#returnCar", function (e) {
    // need event delegation for this function
    e.preventDefault();
    var transactionId = $(this).val();

    $.ajax({
      method: "PUT",
      url: "/return",
      data: { transactionId: transactionId }
    }).done(response => {
      alert("Thank you for returning our car! We hope you enjoyed it! you've been charged $" + response.totalprice);
      window.location.reload();
    });
  });
});
