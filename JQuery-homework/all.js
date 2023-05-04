$(document).ready(function() {

    $('.top a').click(function(event) {
     event.preventDefault();
     $('html,body').animate({
       scrollTop: 0
     }, 1000);
    });
    $('.dropdown').click(function(e) {
        /* Act on the event */
        e.preventDefault();
        $('.dropdown-open').slideToggle();
      });
});

