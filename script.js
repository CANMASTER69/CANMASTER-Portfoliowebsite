/* ============================= */
/* SECTION SCROLL ANIMATION */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll(".section");

  // ถ้า browser ไม่รองรับ IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    sections.forEach(sec => sec.classList.add("show"));
  } else {

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // ให้แสดงครั้งเดียว
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(sec => {
      observer.observe(sec);
    });
  }


  /* ============================= */
  /* CONTACT FORM (SAFE VERSION)  */
  /* ============================= */

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("input[name='name']")?.value || "";
      const email = form.querySelector("input[name='email']")?.value || "";
      const message = form.querySelector("textarea[name='message']")?.value || "";

      const subject = encodeURIComponent(`Website Project from ${name}`);
      const body = encodeURIComponent(`${message}\n\nEmail: ${email}`);

      window.location.href = `mailto:kemaratdaengfu3@gmail.com?subject=${subject}&body=${body}`;
    });
  }

});
/* ============================= */
/* SCROLL PROGRESS */
/* ============================= */

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = scrollPercent + "%";
});

/* ============================= */
/* MOUSE PARALLAX */
/* ============================= */

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  document.querySelectorAll(".floating-shape").forEach(shape => {
    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});
/* ============================= */
/* MAGNETIC BUTTON */
/* ============================= */

document.querySelectorAll(".btn, .project-link").forEach(button => {
  button.addEventListener("mousemove", function(e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  button.addEventListener("mouseleave", function() {
    button.style.transform = "translate(0px, 0px)";
  });
});

/* ============================= */
/* 3D CARD TILT */
/* ============================= */

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });

});

