const langEl = document.querySelector('.header-lang');
const link = document.querySelectorAll('a');
const textHeader = document.querySelector('.text-header');
const mainButton = document.querySelector('.main-button');
const main = document.querySelector('.nav-main');
const services = document.querySelector('.nav-serv');
const about = document.querySelector('.nav-about');
const contacts = document.querySelector('.nav-con');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        const attr = el.getAttribute('language');
        textHeader.textContent = data[attr].textHeader;
        mainButton.textContent = data[attr].mainButton;
        main.textContent = data[attr].main;
        services.textContent = data[attr].services;
        about.textContent = data[attr].about;
        contacts.textContent = data[attr].contacts;

    });
});

var data = {
    'english': {
        'textHeader': 'KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST',
        'mainButton': 'Show more',
        'main': 'main',
        'services': 'our services',
        'about': 'about',
        'contacts': 'contacts',
    },
    'russian': {
        'textHeader': 'МЫ ПОДДЕРЖИВАЕМ ВАС В ПУТИ С СЕРВИСОМ, КОТОРОМУ  МОЖНО ДОВЕРЯТЬ',
        'mainButton': 'Показать больше',
        'main': 'главная',
        'services': 'наши сервисы',
        'about': 'о нас',
        'contacts': 'контакты',
    }
}