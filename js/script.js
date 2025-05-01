// Keybe Bee™ — Frontend magic begins here.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Keybe Bee™ JS loaded.");

  /* 1. Smooth scroll for internal anchors (future use) */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* 2. Reveal on scroll */
  const revealElements = document.querySelectorAll(".content p, .content h2");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  /* 3. Blinking cursor for tagline effect */
  const slogan = document.querySelector(".slogan");
  if (slogan) {
    slogan.innerHTML += '<span class="cursor">|</span>';
    setInterval(() => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.visibility =
          cursor.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 600);
  }
});
