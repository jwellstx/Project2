$(document).ready(function() {
  $("#profileBody").on("click", "#returnCar", function(e) {
      // need event delegation for this function
    e.preventDefault();
    var transactionId = $(this).val();

    $.ajax({
      method: "PUT",
      url: "/return",
      data: {transactionId: transactionId}
    }).done(response => {
        console.log("trying to reload");
        window.location.reload();
    });
  });
});
