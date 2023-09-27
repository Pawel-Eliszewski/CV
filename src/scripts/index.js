import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    // uncomment below for on-scroll animations to be played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
const smoothScrollLinks = document.querySelectorAll("a.smooth-scroll");

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (
      location.pathname.replace(/^\//, "") ===
        link.pathname.replace(/^\//, "") &&
      location.hostname === link.hostname
    ) {
      const target = document.querySelector(link.hash);
      const nameTarget = document.querySelector(
        `[name="${link.hash.slice(1)}"]`
      );
      const scrollTarget = target || nameTarget;

      if (scrollTarget) {
        event.preventDefault();

        window.scrollTo({
          top: scrollTarget.offsetTop,
          behavior: "smooth",
        });
        scrollTarget.tabIndex = -1;
        scrollTarget.focus();
      }
    }
  });
});
