
$(document).ready(function(){
    $(".burger-nav").on("click",function(){
        $("header nav ul").toggleClass("open");
    });
});
$(document).ready(function(){
    $(".navigation").on("click",function(){
        $("header nav ul").removeClass("open");
    });
});