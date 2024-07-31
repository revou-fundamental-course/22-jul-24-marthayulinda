// Form Validation Functions
function validateForm(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var ask = document.getElementById("ask").value;

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
}

function clearErrors() {
  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (msg) {
    msg.remove();
  });
}

function showError(inputId, message) {
  var inputElement = document.getElementById(inputId);
  var errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.style.color = "red";
  errorMessage.innerText = message;
  inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
}

// Smooth Scroll Navigation Function
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// Automatic Image Slider Function
function automaticSlide() {
  var firstIndex = 0;
  function slide() {
    const img = document.querySelectorAll(".images img");
    img.forEach((pic) => (pic.style.display = "none"));
    firstIndex++;
    if (firstIndex > img.length) {
      firstIndex = 1;
    }
    img[firstIndex - 1].style.display = "block";
    setTimeout(slide, 2000);
  }
  slide();
}

// Bold Navigation on Scroll Function
function boldNav() {
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
}

// Initialize all functions
function init() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", validateForm);
  smoothScroll();
  automaticSlide();
  boldNav();
}

// Run initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", init);
