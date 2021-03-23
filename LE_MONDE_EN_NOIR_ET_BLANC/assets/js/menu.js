/*Burger Menu*/
$(document).ready(function(e){
    $('#menuToggle').click(function(e){
        $('#mainNav').stop(true, true).slideToggle(200);
    });
});