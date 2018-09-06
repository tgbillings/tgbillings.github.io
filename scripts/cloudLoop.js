$(document).ready(function() {

    function loop(selection, time) {
        $(selection).css({right:-300});
        $(selection).animate ({
            right: "100%",
        }, time, 'linear', function() {
            loop(selection, time);
        });
    }
        
    loop("#cloud1", 15000);
    loop("#cloud2", 20000);
    loop("#cloud3", 10000);
    loop("#cloud4", 17000);

 });