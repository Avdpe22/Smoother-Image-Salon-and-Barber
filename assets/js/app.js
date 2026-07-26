/* ==========================================================================
   SMOOTHER IMAGE — SITE BEHAVIOR
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    setFooterYear();
    wireBurgerMenu();
    wireBookingLinks();
    wireSocialLinks();
    wireScrollReveals();
    wireHeroLightUp();
    wireChairRail();
    wireCarousel();
  }

  /* ---------- Footer year ---------- */
  function setFooterYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Mobile nav ---------- */
  function wireBurgerMenu() {
    var burger = document.querySelector(".burger");
    var links = document.querySelector(".nav-links");
    if (!burger || !links) return;
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Booking + social links, filled from config.js ---------- */
  function wireBookingLinks() {
    var cfg = (window.SITE_CONFIG && window.SITE_CONFIG.booking) || {};
    document.querySelectorAll("[data-book]").forEach(function (a) {
      var key = a.getAttribute("data-book");
      var url = cfg[key] || cfg.general;
      if (url) {
        a.setAttribute("href", url);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      }
    });
  }

  function wireSocialLinks() {
    var cfg = (window.SITE_CONFIG && window.SITE_CONFIG.social) || {};
    document.querySelectorAll("[data-social]").forEach(function (a) {
      var key = a.getAttribute("data-social");
      var url = cfg[key];
      if (url) {
        a.setAttribute("href", url);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      }
    });
  }

  /* ---------- Scroll reveals ---------- */
  function wireScrollReveals() {
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Hero entrance ---------- */
  function wireHeroLightUp() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.classList.add("is-lit");
      });
    });
  }

  /* ---------- Chair Rail draw-in ---------- */
  function wireChairRail() {
    var rail = document.querySelector(".rail");
    if (!rail) return;
    if (!("IntersectionObserver" in window)) {
      rail.classList.add("is-drawn");
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            rail.classList.add("is-drawn");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(rail);
  }

  /* ---------- Popular Services carousel (home page) ---------- */
  function wireCarousel() {
    var carousel = document.querySelector("[data-carousel]");
    if (!carousel) return;

    var slides = Array.prototype.slice.call(carousel.querySelectorAll(".carousel-slide"));
    var dotsWrap = carousel.querySelector("[data-carousel-dots]");
    var prevBtn = carousel.querySelector("[data-carousel-prev]");
    var nextBtn = carousel.querySelector("[data-carousel-next]");
    if (!slides.length) return;

    var current = 0;
    var timer;

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", "Show slide " + (i + 1));
        dot.addEventListener("click", function () {
          setSlide(i);
          resetTimer();
        });
        dotsWrap.appendChild(dot);
      });
    }
    var dots = dotsWrap ? Array.prototype.slice.call(dotsWrap.children) : [];

    function setSlide(i) {
      slides[current].classList.remove("is-active");
      if (dots[current]) dots[current].classList.remove("is-active");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      if (dots[current]) dots[current].classList.add("is-active");
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () { setSlide(current + 1); }, 6000);
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { setSlide(current - 1); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { setSlide(current + 1); resetTimer(); });

    carousel.addEventListener("mouseenter", function () { clearInterval(timer); });
    carousel.addEventListener("mouseleave", resetTimer);

    resetTimer();
  }
})();
