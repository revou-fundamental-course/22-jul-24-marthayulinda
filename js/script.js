//validasi form
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

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
