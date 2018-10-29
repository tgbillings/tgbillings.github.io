/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 100){
      document.getElementById("nav-down").style.top = "0";
      prevScrollpos = currentScrollPos;
  }
  else{
    document.getElementById("nav-down").style.top = "-60px";
  }
}
