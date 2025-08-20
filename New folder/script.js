document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    once: true,
  });

  // Initialize Particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#2dd4bf" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#38bdf8",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });

  // Initialize Typed.js
  new Typed("#typed-text", {
    strings: ["الهويات البصرية", "الشعارات الاحترافية", "التصاميم المبتكرة"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

  // Back to top button logic
  const toTopBtn = document.getElementById("to-top-btn");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  });

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  mobileMenuButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => mobileMenu.classList.remove("active"))
  );

  // Portfolio Filter Logic
  const filterButtons = document.querySelectorAll(
    "#filter-buttons .filter-btn"
  );
  const portfolioItems = document.querySelectorAll(
    "#portfolio-grid .portfolio-item"
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Set active class on button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (filterValue === "all" || filterValue === itemCategory) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });

  // Update year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
});
