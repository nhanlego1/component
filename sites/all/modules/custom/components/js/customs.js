/**
 * Created by splasher on 7/17/17.
 */
jQuery(function($) {
    'use strict';

    function hide(obj) {
        var el = document.getElementById(obj);
        el.style.display = 'none';
    }
    $(document).ready(function () {
        $(".form-save-wrapper .close-button").click(function(){
            $(".form-save-wrapper").hide();
        });
        $(".form-export-component-wrapper .close-button").click(function(){
            $(".form-export-component-wrapper").hide();
        });

        $(".form-save").submit(function () {
            var title = $("#title-component").val();
            var html = $("#html-component").val();
            var image = $("#image-component").val();
            var css = $("#css-component").val();
            var nid = $("#nid-component").val();

            $.post("/components/save", {html: html, image: image, name: title, nid: nid, css:css}, function (result) {
                if (result != 'not Ok') {
                    $("form.form-save").html('<p style="margin-top: 80px">Update success. The system auto open preview after 3s.</p>')
                    setTimeout(function () {
                        $("#form-wrapper-save").hide();
                        //window.open("/preview/layout/"+result);
                    }, 500);
                    setTimeout(function () {
                        window.location.replace("/preview/layout/"+result+"?screen=true");
                    }, 500);
                } else {
                    $("form.form-save").html('<p style="margin-top: 20px">' + result + '</p>')
                    setTimeout(function () {
                        $("#form-wrapper-save").hide();
                    }, 500);
                }

            });
            return false;
        });

        $(".form-export-component").submit(function () {
            var title = $("#title-export-component").val();
            var html = $("#html-export-component").val();
            var image = $("#icon-component").val();
            var css = $("#css-export-component").val();
            console.log('nhan');
        //    return false;
            $.post("/components/export/component", {html: html, icon: image, name: title, css:css}, function (result) {
                if (result != 'not Ok') {
                    $("form.form-save").html('<p style="margin-top: 80px">You are saving success.</p>')
                    setTimeout(function () {
                        $("#form-wrapper-export-component").hide();
                    }, 500);

                } else {
                    $("form.form-save").html('<p style="margin-top: 20px">' + result + '</p>')
                    setTimeout(function () {
                        $("#form-wrapper-save").hide();
                    }, 2000);
                }

            });
            return false;
        });
        // $(".slider").slick({
        //     dots: true,
        //     speed: 500
        // });

        // $('.flexslider').flexslider({
        //     animation: "slide",
        //     start: function(slider){
        //         $('body').removeClass('loading');
        //     }
        // });

    });

});