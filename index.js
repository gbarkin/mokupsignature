$(".submit").on("click", function() {

    console.log("hello");
    $(".form-control").attr("disabled", "disabled")
    $(".add-card").attr("disabled", "disabled")
    $(".checkboxes").attr("disabled", "disabled")
    $(".submit").attr("disabled", "disabled")
    $('.signature-box').css("visibility", "visible");
    $('.approve').css("visibility", "visible");

});


$(".add-card").on("click", function() {
    alert('Opens Manage Card Screen')

});

$(".approve").on("click", function() {
    $('.container').hide();
    $(".header-text").html("Your order was successfully submitted.")
    $(".header-detail").html("Click 'Print Statement' to print a paper copy of the statment.")
    $('.print-button').show();

});

$(".other-payment").on("click", function() {
    $('.other-payment').attr('disabled', "disabled");
    $('.payment').css("visibility", "visible");

});


$(".email-invoice").on("click", function() {
    alert('Sends email statement to the client email');
});

$(".print-invoice").on("click", function() {
    alert("Print exhibitors statement, PDF statement opens in new tab");
});



$(document).ready(function() {

    console.log('ready')

});