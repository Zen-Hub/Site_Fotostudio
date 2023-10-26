// ПОДСВЕЧИВАНИЕ АКТИВНОЙ СТРАНИЦЫ В МЕНЮ
// Получаем текущий URL страницы
let currentUrl = window.location.href;
// Получаем все ссылки в меню
let menuLinks = document.querySelectorAll('.header__menu-item a');

// Проходим по всем ссылкам в меню
menuLinks.forEach(link => {
    // Если URL ссылки совпадает с текущим URL страницы
  if (link.href === currentUrl) {
     // Добавляем класс .active к ссылке
    link.classList.add('active');
  }
});

// BURGER MENU  ПОДСВЕЧИВАНИЕ АКТИВНОЙ СТРАНИЦЫ В МЕНЮ=========================================================
const hamburger = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const header = document.querySelector('.header')

hamburger.addEventListener('click', () => {
  
    mobileMenu.classList.toggle('show');
    header.classList.toggle('showHeader');
});

// ПОДСВЕЧИВАНИЕ АКТИВНОЙ СТРАНИЦЫ В BURGER
// Получаем текущий URL страницы
let mobileCurrentUrl = window.location.href;

// Получаем все ссылки в меню
let mobileMenuLinks = document.querySelectorAll('.header__mobile-menu-item a');

// Проходим по всем ссылкам в меню
mobileMenuLinks.forEach(link => {
    // Если URL ссылки совпадает с текущим URL страницы
  if (link.href === mobileCurrentUrl) {
     // Добавляем класс .active к ссылке
    link.classList.add('active');
  }
});