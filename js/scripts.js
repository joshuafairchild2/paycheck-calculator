 $(function() {
  $("#calculator form").submit(function(event) {
    var hourlyRateInput = $("input#hourly-rate").val();
    var hoursInput = $("input#normal-hours").val();
    var otInput = $("input#ot-hours").val();
    var dtInput = $("input#dt-hours").val();

    var otRate = (hourlyRateInput * 1.5);
    var dtRate = (hourlyRateInput * 2);
    var grossPay = ((hourlyRateInput * hoursInput) + (otRate * otInput) + (dtRate * dtInput)).toFixed(2);

    $(".calculated-gross").text("$" + grossPay);
    event.preventDefault();
  });
});
