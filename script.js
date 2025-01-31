  // Генерация частиц
  function createParticles() {
    const container = document.querySelector('.particles');
    for(let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            left: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 10 + 15}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}
createParticles();

const translations = {
    ru: {
        'nav.home': 'Главная',
        'nav.why': 'Почему мы',
        'nav.prices': 'Цены',
        'nav.team': 'Команда',
        'nav.contacts': 'Контакты',
        'hero.title': 'Разработка сайтов в Казахстане',
        'hero.subtitle': 'Номер 1 компания по разработке сайтов. От 35,000 тг',
        'hero.cta': 'Заказать сайт',
        'why.title': 'Почему мы?',
        'why.1.title': 'Единовременная оплата',
        'why.1.text': 'Никаких скрытых платежей',
        'why.2.title': 'Гарантия качества',
        'why.2.text': 'Доводим проекты до идеала',
        'why.3.title': 'Поддержка 24/7',
        'why.3.text': 'Всегда на связи',
        'why.4.title': 'Профессиональная команда',
        'why.4.text': 'Опыт более 5 лет',
        'prices.title': 'Наши пакеты',
        'prices.1.title': 'Лендинг',
        'prices.1.price': 'от 35,000 тг',
        'prices.1.desc': 'Стильный одностраничный сайт',
        'prices.2.title': 'Интернет-магазин',
        'prices.2.price': 'от 50,000 тг',
        'prices.2.desc': 'Полный функционал для продаж',
        'prices.3.title': 'Эл. пригласительные',
        'prices.3.price': 'от 35,000 тг',
        'prices.3.desc': 'Современные интерактивные решения',
        'team.title': 'Наша команда',
        'team.1.name': 'Ерасыл Аманулы',
        'team.1.role': 'Lead Developer',
        'team.2.name': 'Арсен Саден',
        'team.2.role': 'UX/UI Designer',
        'team.3.name': 'Асаналихан Мамыров',
        'team.3.role': 'Project Manager',
        'process.title': 'Как мы работаем',
        'process.1.title': 'Заявка',
        'process.1.text': 'Оставьте заявку на сайте',
        'process.2.title': 'Обсуждение',
        'process.2.text': 'Персонализированный подход',
        'process.3.title': 'Разработка',
        'process.3.text': 'Создание сайта под ключ',
        'process.4.title': 'Поддержка',
        'process.4.text': 'Сопровождение проекта',
        'reviews.title': 'Отзывы клиентов',
        'reviews.1.text': 'Лучшие разработчики в Казахстане! Сделали сайт быстро и качественно.',
        'reviews.1.name': 'Аслан Жумабаев',
        'reviews.1.company': 'ТОО "SmartTech"',
        'reviews.2.text': 'Профессиональный подход и внимание к деталям. Рекомендую!',
        'reviews.2.name': 'Алия Каримова',
        'reviews.2.company': 'Магазин "FashionStar"',
        'form.title': 'Оставить заявку',
        'form.name': 'Имя',
        'form.phone': 'Телефон',
        'form.select': 'Выберите услугу',
        'form.submit': 'Отправить',
        'footer.made': 'С любовью сделано в Казахстане ❤️',
        'footer.contacts': 'Контакты',
        'footer.services': 'Услуги',
'footer.subscribe': 'Подписка',
'form.email': 'Ваш email',
'form.subscribe': 'Подписаться',
'footer.rights': '© 2025 WebDevsKZ. Все права защищены',
'form.invalid_phone': 'Номер должен содержать 11-13 цифр',

    },
    kz: {
        'form.invalid_phone': 'Нөмір 11-13 саннан тұруы керек',
        'nav.home': 'Басты',
        'nav.why': 'Неге біз?',
        'nav.prices': 'Бағалар',
        'nav.team': 'Команда',
        'nav.contacts': 'Байланыс',
        'hero.title': 'Қазақстанда сайт жасау',
        'hero.subtitle': 'Сайт жасау бойынша №1 компания. 35,000 теңгеден',
        'hero.cta': 'Сайт тапсырыс беру',
        'why.title': 'Неге біз?',
        'why.1.title': 'Бір реттік төлем',
        'why.1.text': 'Жасырын шығындар жоқ',
        'why.2.title': 'Сапа кепілдігі',
        'why.2.text': 'Жобаларды тамашалаймыз',
        'why.3.title': 'Қолдау 24/7',
        'why.3.text': 'Әрқашан қол жетімді',
        'why.4.title': 'Кәсіби команда',
        'why.4.text': '5 жылдан астам тәжірибе',
        'prices.title': 'Біздің пакеттер',
        'prices.1.title': 'Лендинг',
        'prices.1.price': '35,000 теңгеден',
        'prices.1.desc': 'Стильді бір беттік сайт',
        'prices.2.title': 'Интернет-дүкен',
        'prices.2.price': '50,000 теңгеден',
        'prices.2.desc': 'Сатылымдарға арналған толық функционал',
        'prices.3.title': 'Эл. шақырулар',
        'prices.3.price': '35,000 теңгеден',
        'prices.3.desc': 'Заманауи интерактивті шешімдер',
        'team.title': 'Біздің команда',
        'team.1.name': 'Ерасыл Аманулы',
        'team.1.role': 'Бас әзірлеуші',
        'team.2.name': 'Арсен Саден',
        'team.2.role': 'UX/UI дизайнер',
        'team.3.name': 'Асаналихан Мамыров',
        'team.3.role': 'Жоба менеджері',
        'process.title': 'Біз қалай жұмыс істейміз',
        'process.1.title': 'Өтініш',
        'process.1.text': 'Сайтта өтініш қалдырыңыз',
        'process.2.title': 'Талқылау',
        'process.2.text': 'Жеке тұлғаға бағытталған тәсіл',
        'process.3.title': 'Әзірлеу',
        'process.3.text': 'Сайтты толық циклде жасау',
        'process.4.title': 'Қолдау',
        'process.4.text': 'Жобаны қолдау',
        'reviews.title': 'Клиенттердің пікірлері',
        'reviews.1.text': 'Қазақстандағы ең жақсы әзірлеушілер! Сайтты тез және сапалы жасады.',
        'reviews.1.name': 'Аслан Жумабаев',
        'reviews.1.company': '"SmartTech" ЖШС',
        'reviews.2.text': 'Кәсіби тәсіл және егжей-тегжейлерге назар. Ұсынамын!',
        'reviews.2.name': 'Әлия Кәрімова',
        'reviews.2.company': '"FashionStar" дүкені',
        'form.title': 'Өтініш қалдыру',
        'form.name': 'Аты-жөні',
        'form.phone': 'Телефон',
        'form.select': 'Қызметті таңдаңыз',
        'form.submit': 'Жіберу',
        'footer.made': 'Қазақстанда махаббатпен жасалды ❤️',
        'footer.contacts': 'Байланыс',
        'footer.services': 'Қызметтер',
'footer.subscribe': 'Жазылу',
'form.email': 'Электрондық поштаңыз',
'form.subscribe': 'Жазылу',
'footer.rights': '© 2024 WebDevsKZ. Барлық құқықтар қорғалған'
    },
    en: {
        'nav.home': 'Home',
        'nav.why': 'Why Us',
        'nav.prices': 'Prices',
        'nav.team': 'Team',
        'nav.contacts': 'Contacts',
        'hero.title': 'Website Development in Kazakhstan',
        'hero.subtitle': '#1 Website Development Company. From 35,000 KZT',
        'hero.cta': 'Order Website',
        'why.title': 'Why Choose Us?',
        'why.1.title': 'One-time Payment',
        'why.1.text': 'No hidden fees',
        'why.2.title': 'Quality Guarantee',
        'why.2.text': 'Perfect project execution',
        'why.3.title': '24/7 Support',
        'why.3.text': 'Always available',
        'why.4.title': 'Professional Team',
        'why.4.text': '5+ years experience',
        'prices.title': 'Our Packages',
        'prices.1.title': 'Landing Page',
        'prices.1.price': 'From 35,000 KZT',
        'prices.1.desc': 'Stylish one-page website',
        'prices.2.title': 'E-commerce',
        'prices.2.price': 'From 50,000 KZT',
        'prices.2.desc': 'Full sales functionality',
        'prices.3.title': 'E-invitations',
        'prices.3.price': 'From 35,000 KZT',
        'prices.3.desc': 'Modern interactive solutions',
        'team.title': 'Our Team',
        'team.1.name': 'Ерасыл Аманулы',
        'team.1.role': 'Lead Developer',
        'team.2.name': 'Arsen Saden',
        'team.2.role': 'UX/UI Designer',
        'team.3.name': 'Асаналихан Мамыров',
        'team.3.role': 'Project Manager',
        'process.title': 'Our Process',
        'process.1.title': 'Application',
        'process.1.text': 'Submit your request',
        'process.2.title': 'Discussion',
        'process.2.text': 'Personalized approach',
        'process.3.title': 'Development',
        'process.3.text': 'Full-cycle development',
        'process.4.title': 'Support',
        'process.4.text': 'Project maintenance',
        'reviews.title': 'Client Reviews',
        'reviews.1.text': 'Best developers in Kazakhstan! Made the website quickly and efficiently.',
        'reviews.1.name': 'Aslan Zhumabayev',
        'reviews.1.company': 'SmartTech LLP',
        'reviews.2.text': 'Professional approach and attention to detail. Highly recommend!',
        'reviews.2.name': 'Aliya Karimova',
        'reviews.2.company': 'FashionStar Store',
        'form.title': 'Submit Request',
        'form.name': 'Name',
        'form.phone': 'Phone',
        'form.select': 'Select Service',
        'form.submit': 'Submit',
        'footer.made': 'Made with ❤️ in Kazakhstan',
        'footer.contacts': 'Contacts',
        'footer.services': 'Services',
'footer.subscribe': 'Subscribe',
'form.email': 'Your email',
'form.subscribe': 'Subscribe',
'footer.rights': '© 2024 WebDevsKZ. All rights reserved',
'form.invalid_phone': 'Number must contain 11-13 digits',

    }
};

function updateTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[lang][key];
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.dataset.translatePlaceholder;
        el.placeholder = translations[lang][key];
    });

    document.querySelectorAll('option[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[lang][key];
    });
}

// Заменить блок кода с lang buttons на:
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.dataset.lang;
        document.querySelector('.lang-current span').textContent = lang.toUpperCase();
        document.querySelector('.lang-option.active').classList.remove('active');
        this.classList.add('active');
        updateTranslations(lang);
        localStorage.setItem('selectedLang', lang);
    });
});

// Обновить сохранение языка
const savedLang = localStorage.getItem('selectedLang') || 'ru';
document.querySelector(`.lang-option[data-lang="${savedLang}"]`).classList.add('active');
document.querySelector('.lang-current span').textContent = savedLang.toUpperCase();

document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.menu-toggle');
    
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
        toggle.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('active');
        document.querySelector('.menu-toggle').classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

const swiper = new Swiper('.reviews-slider', {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    breakpoints: { 768: { slidesPerView: 2 } }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.background = window.scrollY > 100 ? 
        'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    
    // Валидация телефона
    const lang = localStorage.getItem('selectedLang') || 'ru';
    const phoneInput = document.querySelector('input[data-translate-placeholder="form.phone"]');
    const phoneValue = phoneInput.value.replace(/[^\d]/g, ''); // Удаляем все нецифровые символы
    
    // Проверка длины номера (11-13 цифр)
    if (phoneValue.length < 11 || phoneValue.length > 13) {
        alert(translations[lang]['form.invalid_phone']);
        submitButton.disabled = false;
        return;
    }

    // Сбор данных в FormData
    const formData = new FormData();
    formData.append('name', document.querySelector('input[data-translate-placeholder="form.name"]').value);
    formData.append('phone', phoneValue);
    formData.append('service', document.querySelector('select[data-translate-placeholder="form.service"] option:checked').textContent);
    formData.append('lang', lang);

    // Отправка данных
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwjBpRhLo0vKjvSBh3gKiscPG4m5PSCF94_OAiOKGAVgCM2JgttdoebJcGuGcA8uwjclg/exec';
    
    fetch(scriptUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
        redirect: 'follow'
    })
    .then(() => {
        showSuccessMessage();
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        showErrorMessage();
    })
    .finally(() => {
        submitButton.disabled = false;
    });
});
