const hamburger = document.getElementById("hamburger-button");
const navButtons = document.getElementById("nav-buttons");

hamburger.addEventListener("click", () => {
  const isOpen = navButtons.classList.toggle("nav-open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

// Close the menu whenever one of the nav buttons is clicked
navButtons.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.classList.remove("nav-open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});
