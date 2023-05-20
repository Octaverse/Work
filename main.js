function btn(){
    window.open("dark.html");
}

function btn2(){
    window.open("index.html");
}

function changeBg(){

  var navbar = document.getElementById('nav');

  var scrollValue = window.scrollY;
  if (scrollValue < 70) {
    navbar.classList.remove('Bgcolour');
    
  } else {
    navbar.classList.add('Bgcolour');
  }
}

window.addEventListener('scroll',changeBg);

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the page from reloading on submit
  const searchTerm = input.value;
  const searchUrl = `https://www.google.com/search?q=${searchTerm}`;
  window.open(searchUrl); // Redirects the browser to the Google search page
});
// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

