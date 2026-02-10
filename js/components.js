async function loadComponent(id, path, callback) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(path);
  el.innerHTML = await res.text();

  if (window.lucide) lucide.createIcons();

  if (callback) callback();
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html", () => {
    if (window.initNavbar) initNavbar();
  });

  loadComponent("footer", "components/footer.html");
});
