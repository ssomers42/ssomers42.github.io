
$(document).ready(function(){
    var speed = 1000;

    // check for hash and if div exist... scroll to div
    var hash = window.location.hash;
    if($(hash).length) scrollToID(hash, speed); 

    // scroll to div on nav click
    $('.scroll-link').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        if($(id ).length) scrollToID(id, speed);
    });

    function scrollToID(id, speed) {
        var offSet = 70;
        var obj = $(id).offset();
        var Offset = obj.top - offSet;
        $('html,body').animate({ scrollTop: Offset }, speed);
    }

    $("#workNav").click(function() {
    	$('html,body').animate({
    	    scrollTop: $(".myWork").offset().top},
    	    'slow');
    });
})


