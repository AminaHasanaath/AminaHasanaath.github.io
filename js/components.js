async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(path);
  el.innerHTML = await res.text();

  // Lucide icons
  if (window.lucide) lucide.createIcons();

  // 🔥 Notify that navbar/footer is ready
  document.dispatchEvent(new Event("componentsLoaded"));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");
});
