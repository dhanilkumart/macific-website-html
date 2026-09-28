// Macific Holdings — small progressive enhancements

(function () {
  "use strict";

  var header = document.querySelector("[data-header]");

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-solid");
    else header.classList.remove("is-solid");
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  reveals.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 4, 3) * 80 + "ms";
    observer.observe(el);
  });
})();
