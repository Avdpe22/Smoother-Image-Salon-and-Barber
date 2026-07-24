(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    /* ---- Wire booking + social links from config.js ---- */
    document.querySelectorAll("[data-book]").forEach(function (el) {
      const v = BOOKING_LINKS[el.dataset.book];
      if (v) el.setAttribute("href", v);
    });
    document.querySelectorAll("[data-social]").forEach(function (el) {
      const v = SOCIAL_LINKS[el.dataset.social];
      if (v) el.setAttribute("href", v);
    });

    /* ---- Current page in nav ---- */
    const here = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      if (a.getAttribute("href") === here) a.classList.add("is-current");
    });

    /* ---- Mobile nav ---- */
    const burger = document.querySelector(".burger");
    const links = document.querySelector(".nav-links");
    if (burger && links) {
      burger.addEventListener("click", function () {
        const open = links.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(open));
      });
    }

    /* ---- Hero entrance ---- */
    const hero = document.querySelector(".hero");
    if (hero) requestAnimationFrame(function () { hero.classList.add("is-lit"); });

    /* ---- Scroll reveal + chair rail draw ---- */
    const targets = document.querySelectorAll(".reveal, .rail");
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach(function (t) {
        t.classList.add(t.classList.contains("rail") ? "is-drawn" : "in");
      });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add(e.target.classList.contains("rail") ? "is-drawn" : "in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (t) { io.observe(t); });

    /* ---- Footer year ---- */
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
