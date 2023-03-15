"use strict"

window.addEventListener('load', onPageLoad);

function onPageLoad() {
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
