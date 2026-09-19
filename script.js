const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const cursorGlow = document.getElementById('cursorGlow');

menuBtn?.addEventListener('click', () => nav.classList.toggle('show'));
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('show'));
});

window.addEventListener('pointermove', (e) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});
