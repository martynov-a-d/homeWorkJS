'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let textEl = document.querySelector('.text');
console.log(textEl);

let navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);

navLinks.forEach(elem => {
    elem.addEventListener('click', clickHandler);
});


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    console.log(event);
    console.log(event.target);
    changeText(event.target);
    changeActiveClass(event.target);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(elem) {
    navLinks.forEach(elem => {
        elem.classList.remove('active');
    });
    elem.classList.add("active");
    console.log(elem);
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(elem) {
    switch (elem.textContent) {
        case 'Link 1':
            textEl.innerHTML = texts.text1;
            break;
        case 'Link 2':
            textEl.innerHTML = texts.text2;
            break;
        case 'Link 3':
            textEl.innerHTML = texts.text3;
            break;
    }
}