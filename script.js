const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
// smooth scrolling
btnNav.addEventListener("click", function () {
  console.log("clicked");
  header.classList.toggle("nav-open");
});
allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  })
);
// sticky navigation
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    console.log(entry);
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);
