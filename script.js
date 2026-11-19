/* ==========================================================================
   AIKids — Site Script
   --------------------------------------------------------------------------
   Small, dependency-free JavaScript. It does three things:
   1. Opens/closes the mobile navigation menu
   2. Fades sections in as you scroll (anything with class="fade-in")
   3. Fills in the current year in the footer copyright
   You normally won't need to edit this file.
   ========================================================================== */

// Tell the CSS that JavaScript is running (lets fade-in hide content
// until it's visible; without JS, content simply shows normally).
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {

  /* 1. MOBILE MENU ------------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu with the Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* 2. FADE-IN ON SCROLL ------------------------------------------------- */
  var fadeItems = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate once only
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    fadeItems.forEach(function (item) { observer.observe(item); });
  } else {
    // Very old browsers: just show everything
    fadeItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  /* 3. FOOTER YEAR ------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
});
