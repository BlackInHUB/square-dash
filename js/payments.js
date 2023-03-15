const animItems = document.querySelectorAll('.anim');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll () {
        for (let i = 0; i < animItems.length; i += 1) {

            const animItem = animItems[i];
            //Отримуємо висоту елемента:
            const animItemHeight = animItem.offsetHeight;
            
            //Отримуємо положення елемента відносно верху:
            const animItemOffset = offset(animItem).top;
            //Коефіцієнт старту анімації:
            const animStart = 4;
            
            //Точка старту анімації
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            //Якщо висота елемента більше висоти вікна:
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };

            //Якщо прокрутили вже в область старту анімації, але ще не прокрутили за елемент:
            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemHeight + animItemOffset)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('no-repeat')) {
                    animItem.classList.remove('active');
                }
            };
        }
    }
}

//Функція для отримання відстані від верху/ліва за координатами місцезнаходження елемента:
function offset (el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
};
//