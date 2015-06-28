/**
 * Created by GuntarWi on 17.06.2015.
 */
$(document).ready(function(){
    $(".btn").click(function(){
        $(".footer-mail").addClass("hidden");
        $(".loading-part").removeClass("hidden");
    });



    $(window).bind("scroll", function() {
        if ($(this).scrollTop() > 2050) {
            $(".arrow").fadeIn('fast');
        } else if($(this).scrollTop() < 500) {
            $(".arrow").stop().fadeOut('fast');
        }
    });

    $(document).ready(function() {
        $("#owl-demo").owlCarousel({

            navigation : true,
            slideSpeed : 1000,
            paginationSpeed : 500,
            singleItem : true,
            autoPlay:true,
            navigationText : ["<",">"],
            transitionStyle : "goDown"

        });
    });


    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        //the 205 is a fixed header offset
                        scrollTop: target.offset().top - 10
                    }, 1000);
                    return false;
                }
            }
        });
    });

});


function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
