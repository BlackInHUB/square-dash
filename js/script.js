"use strict"

window.addEventListener('load', onPageLoad);

function onPageLoad() {
    console.log('onLoad')
    const buttons = document.querySelectorAll('.button');
    const about = document.querySelector('.main__about').querySelectorAll('span');
    const firstTitle = document.querySelector('.main__title-first').querySelectorAll('span');
    const secondTitle = document.querySelector('.main__title-second').querySelectorAll('span');
    const mainImg = document.querySelector('.main__img');
    const partners = document.querySelector('.insurance-wrapper');

    let timeout = 0;

    for (let i = 0; i < firstTitle.length || i < secondTitle.length; i += 1) {
        timeout += 150;
        setTimeout(() => {
            firstTitle[i]?.classList.add('shown');
            secondTitle[i]?.classList.add('shown');
        }, timeout);
    };

    about.forEach(word => {
        timeout += 150;
        setTimeout(() => {
            word.classList.add('shown');
        }, timeout);
    });

    mainImg.style.cssText = `animation: img-show 1s linear; animation-delay: ${timeout / 2}ms; animation-fill-mode: forwards;`;

    timeout += 500;

    setTimeout(() => {
        partners.classList.add('shown');
    }, timeout);

    buttons.forEach(button => {
        timeout += 1000;
        setTimeout(() => {
            button.classList.add('shown');
        }, timeout)
    });

    timeout += 1000;

    setTimeout(() => {
        buttons.forEach(button => {
            if (!button.classList.contains('active')) {
                button.style.cssText = `animation: button-shake 0.8s linear;`;
            };
        });
    }, timeout);
};

const options = {
    rootMargin: '0px',
    threshold: 0
};

const observer = new IntersectionObserver(animateCallback, options);

const animItems = document.querySelectorAll('.anim');

animItems.forEach(item => observer.observe(item));

function animateCallback (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            if (!entry.target.classList.contains('no-repeat')) {
                entry.target.classList.remove('active');
            };
        };
    });
};

// const animItems = document.querySelectorAll('.anim');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);

//     function animOnScroll () {
//         for (let i = 0; i < animItems.length; i += 1) {

//             const animItem = animItems[i];
//             //Отримуємо висоту елемента:
//             const animItemHeight = animItem.offsetHeight;
            
//             //Отримуємо положення елемента відносно верху:
//             const animItemOffset = offset(animItem).top;
//             //Коефіцієнт старту анімації:
//             const animStart = 4;
            
//             //Точка старту анімації
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             //Якщо висота елемента більше висоти вікна:
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             };

//             //Якщо прокрутили вже в область старту анімації, але ще не прокрутили за елемент:
//             if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemHeight + animItemOffset)) {
//                 animItem.classList.add('active');
//             } else {
//                 if (!animItem.classList.contains('no-repeat')) {
//                     animItem.classList.remove('active');
//                 }
//             };
//         }
//     }
// }

// //Функція для отримання відстані від верху/ліва за координатами місцезнаходження елемента:
// function offset (el) {
//     const rect = el.getBoundingClientRect();
//     const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
// };
// //

// animOnScroll();