$(document).ready(function() {

    
    $('.hideme').each( function(i){
    var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'},500);
        }
    })
    console.log("test")

    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
            
            bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
            bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        });
    });
});