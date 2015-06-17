/**
 * Created by GuntarWi on 17.06.2015.
 */
$(document).ready(function(){
    $(".btn").click(function(){
        $(".footer-mail").addClass("hidden");
    });


    //$(".owl-carousel").owlCarousel({
    //
    //    //navigation : false, // Show next and prev buttons
    //    //slideSpeed : 300,
    //    //paginationSpeed : 400,
    //    //singleItem:true
    //
    //    // "singleItem:true" is a shortcut for:
    //     items : 1
    //    // itemsDesktop : false,
    //    // itemsDesktopSmall : false,
    //    // itemsTablet: false,
    //    // itemsMobile : false
    //
    //});



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
