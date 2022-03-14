// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let divElement = document.createElement(`div`);
// let button = document.createElement("button");
// document.body.append(button);
// document.body.append(divElement);
// divElement.innerHTML= (`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dignissimos dolores fugit id mollitia necessitatibus nemo nisi numquam quae quam.</p>`);
// divElement.setAttribute("id", "text");
// button.innerText = 'НАТИСНИ ЩОБ ТЕКСТ ЗНИК І ';
// divElement.classList.add('displayON')
// button.onclick = function TextHider() {
//     let text = document.getElementById("text");
//     if (text.className === 'displayON') {
//         text.className += ' displayOFF';
//     } else {
//         text.className = `${'displayON'}`
//     }
// }
// button.onclick = function TextHider() {
//     let text = document.getElementById('text')
//     text.style.display ='none';
// }
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// button.innerText = 'Клікни'
// document.body.append(button)
//
// function hider() {
//     button.style.display = 'none'
// }
// button.onclick = hider;
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let button = document.getElementById('buttonforAge')
// button.onclick = function () {
//     let age = document.getElementById('age').value
//     if (!age){
//         alert('ви не ввели данні')
//         }else if (age < 18){
//         alert('Ви маленький')
//     }else if (age >= 18){
//         alert('Падрос вітаю )')
//     }
// }
// - Создайте меню, которое раскрывается сворачивается при клике
// let titleMenu = document.querySelector('.title')
// titleMenu.onclick = function () {
//     let menu = document.querySelector('.items')
//     menu.classList.toggle('displayOFF')
// }
//я на 10 строці це робив але трішки по іншому




// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {name: 'Вася', body: 'Привіт як справи ?'},
    {name: 'Андрій', body: 'Нормально ви шо?'},
    {name: 'Пєтя', body: 'Потіхоньку?'},
    {name: 'Оля', body: 'Та чайок попиваємо)'},
    {name: 'Вова', body: 'Сніг вже пропав чілимось на сонці) хаха'},
    {name: 'Паша', body: 'Ну ми зара тоже підемо до вас'},
];
let FirstDiv = document.createElement('div')
for (let comment of comments) {
    let button = document.createElement('button')
    let SecondDiv = document.createElement('div')
    let itemH4 = document.createElement('h4')
    let itemP = document.createElement('p')
    let hr = document.createElement('hr')
    itemP.innerText = comment.body;
    itemH4.innerText = comment.name;
    button.innerText = 'Hide';
    SecondDiv.append(itemH4,itemP,button,hr);
    FirstDiv.append(SecondDiv);
    itemP.classList.add('item')
    button.onclick = function () {
        itemP.classList.add('displayOFF')
    }
}
document.body.append(FirstDiv);

