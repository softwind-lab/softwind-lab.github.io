// scripts/ga.js
(function () {
  const GA_MEASUREMENT_ID = "G-NC6HWL507S";
  const ALLOWED_HOSTNAMES = ["www.softwindlab.com", "softwindlab.com"];

  if (!ALLOWED_HOSTNAMES.includes(window.location.hostname)) {
    console.debug("GA skipped: not a production domain");
    return;
  }

  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
})();
