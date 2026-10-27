const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  const recipient = "your-email@example.com"; // Replace with your real email
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  formStatus.textContent = "Opening your email application...";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
