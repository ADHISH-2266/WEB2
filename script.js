// Mobile navigation and lightweight form feedback.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));
  }
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('[role="status"]') || document.createElement('p');
      status.setAttribute('role', 'status');
      status.textContent = 'Thanks for your enquiry. This demo form is not connected to an email service yet.';
      status.style.cssText = 'margin-top:14px;color:#246b4b;font-weight:700';
      if (!status.parentNode) form.appendChild(status);
    });
  }
});
