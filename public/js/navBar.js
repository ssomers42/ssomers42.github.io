(function ($) {
  $(document).ready(function(){

     //hide .navbar first
    $(".navbar").hide();

     //fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 10) {
                // $('.filler').fadeOut();
                $('.navbar').fadeIn();
            } else {
                // $('.filler').fadeIn();
                $('.navbar').fadeOut();
            }
        });
    });

});
  }(jQuery));