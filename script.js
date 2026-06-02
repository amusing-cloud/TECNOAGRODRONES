/* ============================================
   TECNOAGRO — Script
   ============================================ */

/* ---------- CONFIGURAÇÃO EmailJS ----------
   1) Cria conta gratuita em https://www.emailjs.com/
   2) Configura um Email Service (ex: Gmail) e copia o SERVICE ID
   3) Cria um Email Template e copia o TEMPLATE ID
   4) Copia a PUBLIC KEY em Account > General
   5) Substitui os valores abaixo:
------------------------------------------------ */
const EMAILJS_PUBLIC_KEY = "LDLuwBwCpxky2A0mB";
const EMAILJS_SERVICE_ID = "service_2kuus08";
const EMAILJS_TEMPLATE_ID = "template_xttlz0k";

// Inicializar EmailJS (só corre se a SDK estiver carregada)
if (typeof emailjs !== "undefined") {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

/* ---------- Navbar scroll ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

/* ---------- Menu mobile ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("active"))
);

/* ---------- Reveal on scroll ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ---------- Ano dinâmico ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Formulário de Contacto ---------- */
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.className = "form-status";
  status.textContent = "";

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    status.textContent = "Por favor preencha todos os campos obrigatórios.";
    status.classList.add("error");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = "Por favor insira um email válido.";
    status.classList.add("error");
    return;
  }

  // Verificar se EmailJS está configurado
  if (
    typeof emailjs === "undefined" ||
    EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
  ) {
    status.textContent = "⚠️ Formulário ainda não configurado. Consulte o README.md.";
    status.classList.add("error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "A enviar...";

  const params = {
    from_name: nome,
    from_email: email,
    phone: telefone || "Não fornecido",
    message: mensagem,
    to_email: "tecnoagroservicosagricolas@gmail.com"
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
    status.textContent = "✓ Mensagem enviada com sucesso! Entraremos em contacto em breve.";
    status.classList.add("success");
    form.reset();
  } catch (err) {
    console.error(err);
    status.textContent = "Ocorreu um erro ao enviar. Tente novamente ou contacte-nos por email.";
    status.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar Mensagem";
  }
});
