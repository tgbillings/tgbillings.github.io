/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);
  if (currentScrollPos > 60){
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-down").style.top = "0";
      } else {
        document.getElementById("nav-down").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
  }
  else{
    document.getElementById("nav-down").style.top = "-60px";
  }
}
