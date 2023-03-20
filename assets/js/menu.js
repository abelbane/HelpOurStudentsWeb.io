
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
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }