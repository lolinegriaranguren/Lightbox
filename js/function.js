$(document).ready(function() {
    
    var modal = $("#modal-box");
    var boton = $(".boton");
    var close = $("img");
    
    modal.hide();
    
    boton.click(function(){
        modal.fadeIn();
    });
    close.click(function(){
       modal.fadeOut(); 
    });
});

var widthWindow = $(window).width();
var heigthWindow = $(window).height();

var box = $(".box-lightbox");
var widthBox = box.width();
var heigthBox = box.height();

var widthGeneral = (widthWindow-widthBox)/2 ;
box.css("left", widthGeneral);

var heigthGeneral = (heigthWindow-heigthBox)/2;
box.css("top", heigthGeneral);


