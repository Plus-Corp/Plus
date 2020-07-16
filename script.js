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

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
$('body').addClass('stop-scrolling')
$('.stop-clicking').css('visibility','visible');
$('.stop-clicking').css('opacity','1');
$('.stop-clicking').css('background-color','hsl(0, 0%, 0%, 50%)');
$('.radiopopup').css('visibility','visible');
$('.radiopopup').css('opacity','1');
$('.radiopopup').css('background-color','hsl(0, 0%, 0%, 50%)');



var storedText;

fetch('https://fiddle.jshell.net/robots.txt')
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
    });
  });

function done() {
  document.getElementById('log').textContent =
    "Here's what I got! \n" + storedText;
}



}

// call this to Enable
function enableScroll() {
$('body').removeClass('stop-scrolling')
$('.stop-clicking').css('visibility','hidden');
$('.stop-clicking').css('opacity','0');
$('.stop-clicking').css('background-color','hsl(0, 0%, 0%, 0%)');
$('.radiopopup').css('visibility','hidden');
$('.radiopopup').css('opacity','0');
$('.radiopopup').css('background-color','hsl(0, 0%, 0%, 0%)');
}

