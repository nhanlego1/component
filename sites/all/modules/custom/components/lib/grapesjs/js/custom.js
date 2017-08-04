/**
 * Created by splasher on 6/21/17.
 */
(function($){
    "use strict";

    $(document).ready(function(){
        var error = false;
        $("form.form .sub-btn").click(function(){
            if($(".sub-input.name").val()==''){
                $(".sub-input.name").addClass('error');
                error = true;
            }else{
                error = false;
            }
            if($(".sub-input.email").val()==''){
                $(".sub-input.email").addClass('error');
                error = true;
            }else{
                error = false;
            }
            if(error){
                return false;
            }


        });
        // $('.flexslider').flexslider({
        //     animation: "slide",
        //     start: function(slider){
        //         $('body').removeClass('loading');
        //     }
        // });

        // $(".slider").slick({
        //     dots: true,
        //     speed: 500
        // });
    });
    // //add slider
    // $(window).load(function(){
    //     $('.flexslider').flexslider({
    //         animation: "slide",
    //         animationLoop: false,
    //         itemWidth: 210,
    //         itemMargin: 5,
    //         pausePlay: true,
    //         start: function(slider){
    //             $('body').removeClass('loading');
    //         }
    //     });
    // });

})(jQuery);
