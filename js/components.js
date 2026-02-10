async function loadComponent(id, path, callback) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(path);
  el.innerHTML = await res.text();

  if (window.lucide) lucide.createIcons();

  if (callback) callback();
}

document.addEventListener("DOMContentLoaded", () => {
  // Load navbar, then initialize its JS
  loadComponent("navbar", "components/navbar.html", () => {
    if (window.initNavbar) initNavbar(); // optional for other navbar features
    if (window.initMobileNav) initMobileNav(); // add this
  });

  loadComponent("footer", "components/footer.html");
});
