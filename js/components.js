async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Component load failed");
    el.innerHTML = await res.text();

    if (window.lucide) lucide.createIcons();
  } catch (err) {
    console.error(`Error loading ${path}`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");
});
