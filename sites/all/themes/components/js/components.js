/*jslint nomen: true, plusplus: true, todo: true, white: true, browser: true, indent: 2 */

jQuery(function($) {
  'use strict';

  // //add canvas
  //   $(".template-item").each(function(){
  //      var nid = $(this).attr('data');
  //      console.log($("#template-"+nid));
  //       html2canvas($("#template-"+nid), {
  //           onrendered: function(canvas) {
  //               $("#canvas-"+nid).append(canvas);
  //           },
  //           width: 200,
  //           height: 200
  //       });
  //   });
  //   $(".slider").slick({
  //       dots: true,
  //       speed: 500
  //   });
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });

});
