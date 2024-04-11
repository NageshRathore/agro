// for slider



var modal = document.getElementById("signupModal");
var btn = document.getElementById("sign");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("signupForm").onsubmit = function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  
  console.log("Name:", name);
  console.log("Phone Number:", phone);
  
  modal.style.display = "none";
}
// shuffling images
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block';
}

prev.addEventListener("click", function() {
    showSlide(slideIndex -= 1);
});

next.addEventListener("click", function() {
    showSlide(slideIndex += 1);
});

showSlide(slideIndex);

