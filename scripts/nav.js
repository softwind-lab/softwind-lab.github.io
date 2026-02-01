const mobileNavLinks = document.querySelector(".mobile-nav-links");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const XIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-black" aria-hidden="true" code-path="src/sections/Navigation.tsx:102:15"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>';
const MenuIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6 text-black" aria-hidden="true" code-path="src/sections/Navigation.tsx:102:15"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>';

function toggleMobileNav() {
  mobileNavLinks.classList.toggle("open");
  updateMobileNavToggle();
}

function updateMobileNavToggle() {
  mobileNavToggle.innerHTML = mobileNavLinks.classList.contains("open")
    ? XIcon
    : MenuIcon;
}

mobileNavLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNavLinks.classList.remove("open");
    updateMobileNavToggle();
  });
});

const nav = document.querySelector(".product-page nav");
if (nav) {
  function updateNavScrolled() {
    if (window.scrollY > 0) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", updateNavScrolled, { passive: true });
  updateNavScrolled();
}
