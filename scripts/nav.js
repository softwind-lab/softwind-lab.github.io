(function () {
  const MOBILE_NAV_LINKS_SELECTOR = ".mobile-nav-links";
  const MOBILE_NAV_TOGGLE_SELECTOR = ".mobile-nav-toggle";
  const XIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-black" aria-hidden="true" code-path="src/sections/Navigation.tsx:102:15"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>';
  const MenuIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6 text-black" aria-hidden="true" code-path="src/sections/Navigation.tsx:102:15"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>';

  window.toggleMobileNav = function () {
    document.querySelector(MOBILE_NAV_LINKS_SELECTOR).classList.toggle("open");
    updateMobileNavToggle();
  };

  function updateMobileNavToggle() {
    document.querySelector(MOBILE_NAV_TOGGLE_SELECTOR).innerHTML = document
      .querySelector(MOBILE_NAV_LINKS_SELECTOR)
      .classList.contains("open")
      ? XIcon
      : MenuIcon;
  }

  window.addEventListener("load", () => {
    document.querySelectorAll(MOBILE_NAV_LINKS_SELECTOR + " a").forEach((a) => {
      a.addEventListener("click", toggleMobileNav);
    });
  });
})();
