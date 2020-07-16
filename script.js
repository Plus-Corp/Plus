function parallax() {
	var s = document.getElementById("floater");
  var yPos = 0 - window.pageYOffset/15;	
  $('#floater').css('background-position-y', 80 + yPos + "%")
  $('#floater2').css('background-position-y', 140 + yPos + "%")
  
  //alert(yPos);
}

window.addEventListener("scroll", function(){
	parallax();	
});