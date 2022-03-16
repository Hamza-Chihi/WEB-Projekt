//top button
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};


//wenn der browser bis zum ein punkt kommt, kommt der button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
