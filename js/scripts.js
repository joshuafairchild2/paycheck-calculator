$(function() {
  $("#calculator form").submit(function(event) {
    var hourlyRateInput = parseFloat($("input#hourly-rate").val(), 10);
    var hoursInput = parseFloat($("input#normal-hours").val(), 10);
    var otInput = parseFloat($("input#ot-hours").val(), 10);
    var dtInput = parseFloat($("input#dt-hours").val(), 10);

    var otRate = (hourlyRateInput * 1.5);
    var dtRate = (hourlyRateInput * 2);

    var grossPay = ((hourlyRateInput * hoursInput) + (otRate * otInput) + (dtRate * dtInput)).toFixed(2);

    $(".calculated-gross").text("$" + grossPay);

    event.preventDefault();
  });
});
