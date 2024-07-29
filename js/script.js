document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".banner-slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Tampilkan slide pertama
  showSlide(currentSlide);

  // Ubah slide setiap 5 detik
  setInterval(nextSlide, 5000);
});

// Validasi form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var ask = document.getElementById("ask").value;

    if (name === "") {
      alert("Name must be filled out");
      event.preventDefault();
    } else if (email === "") {
      alert("Email must be filled out");
      event.preventDefault();
    } else if (ask === "") {
      alert("Please select an option");
      event.preventDefault();
    } else {
      alert("Form submitted successfully!");
    }
  });
