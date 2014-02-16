$(function() {
  var yearsInput = $("#years");
  $( "#slider-range" ).slider({
    range: true,
    min: 1950,
    max: 2015,
    values: [ yearsInput.val().split(" - ")[0], yearsInput.val().split(" - ")[1] ],
    slide: function( event, ui ) {
      $( "#years" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    }
  });
  yearsInput.val($( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );
});