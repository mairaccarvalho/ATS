// =========================
// BOTÃO: Voltar ao Topo
// =========================
const btn = document.querySelector('.button-top');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('scroll', () => {
    btn.classList.toggle('btn-active', window.scrollY > 100);
});

// =========================
// FIXAR NAVBAR E ALTERAR LOGO AO ROLAR
// =========================
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;

    // Adiciona classe para logo ficar translúcida e flutuante ao rolar
    if (scrollTop > 50) {
        logo.classList.add("logo-destaque");
    } else {
        logo.classList.remove("logo-destaque");
    }
});

// =========================
// SCROLLREVEAL - Animações
// =========================
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 600
});

scrollReveal.reveal(`
    #home .home-text, 
    #about .about-img,
    #about .about-text, 
    #about .box-button-rm,
    #projects .projects-title, 
    #projects .row,
    #testimony .testimony-title, 
    #testimony .testimony-box,
    #contacts .map-container, 
    #contacts .form-container
`, { interval: 50 });

// =========================
// ANIMAÇÃO SPLASH SCREEN
// =========================
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById("splash");
        const navbar = document.getElementById("navbarID");
        const mainContent = document.getElementById("main-content");

        if (splash) splash.style.display = "none";
        if (navbar) navbar.classList.add("show");
        if (mainContent) mainContent.classList.add("show");
    }, 700);
});

// =========================
// FAIXA DECORATIVA APÓS SCROLL
// =========================
const faixa = document.querySelector('.faixa-scroll');
let scrollTimer;
let faixaExibida = false;

window.addEventListener('scroll', () => {
    if (faixaExibida) return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        faixa.style.opacity = '1';
        faixaExibida = true;
    }, 400);
});

// =========================
// MENU MOBILE
// =========================
const menuIcon = document.querySelector('.menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        navlist.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});







