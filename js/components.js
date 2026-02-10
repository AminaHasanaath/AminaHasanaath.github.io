async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(path);
  el.innerHTML = await res.text();
  if (window.lucide) lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");
});
