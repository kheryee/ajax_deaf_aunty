$(document).ready(function(){
    // Attach a submit handler to the form
  $( "#say_something" ).submit(function( event ) {
    event.preventDefault();
    // Stop form from submitting normally

    var input = $(this).serialize();

    $.ajax({
      type: 'post',
      url: '/aunty',
      data: input,
      success: function(msg){
        $( "#result" ).empty().append( msg );
      }
    })
  });
});