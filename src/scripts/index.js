import AOS from "aos";

const navbar = document.querySelector(".navbar");
const section1 = document.querySelector(".profile-page");
const burgerBtn = document.querySelector(".navbar-toggler");
const navMobile = document.getElementById("navigation");

burgerBtn.addEventListener("click", () => {
  navMobile.classList.remove("collapse");
});

let isScrolled = false;

window.addEventListener("scroll", () => {
  const section1Top = section1.getBoundingClientRect().top;

  if (section1Top <= -110 && !isScrolled) {
    navbar.classList.remove("navbar-transparent");
    isScrolled = true;
  } else if (section1Top >= -110 && isScrolled) {
    navbar.classList.add("navbar-transparent");
    isScrolled = false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    // uncomment below for on-scroll animations to be played only once
    // once: true
  }); // initialize animate on scroll library
});

$("a.smooth-scroll").click(function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});
