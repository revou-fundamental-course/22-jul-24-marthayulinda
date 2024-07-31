document.addEventListener("DOMContentLoaded", function () {
  // Validasi form
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var ask = document.getElementById("ask").value;

      // Clear previous error messages
      clearErrors();

      var isValid = true;

      if (name === "") {
        showError("name", "*name must be filled out");
        isValid = false;
      }
      if (email === "") {
        showError("email", "*email must be filled out");
        isValid = false;
      }
      if (ask === "") {
        showError("ask", "*please select an option");
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault();
      } else {
        alert("Form submitted successfully!");
      }
    });

  // Clear previous error messages
  function clearErrors() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (msg) {
      msg.remove();
    });
  }

  // Show error message
  function showError(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.innerText = message;
    inputElement.parentNode.insertBefore(
      errorMessage,
      inputElement.nextSibling
    );
  }

  // Smooth scroll navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Autoslide
  var firstIndex = 0;
  function automaticSlide() {
    var pics;
    const img = document.querySelectorAll(".images img");
    for (pics = 0; pics < img.length; pics++) {
      img[pics].style.display = "none";
    }
    firstIndex++;
    if (firstIndex > img.length) {
      firstIndex = 1;
    }
    img[firstIndex - 1].style.display = "block";
    setTimeout(automaticSlide, 2000);
  }
  automaticSlide();
});

//bold nav
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main > section, main > article");
  const navLinks = document.querySelectorAll(".nav-item");

  function changeActiveNav() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  changeActiveNav();
  window.addEventListener("scroll", changeActiveNav);
});
