// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// let Element = document.createElement('div');
//     Element.classList.add('wrap');
//     Element.classList.add('collapse');
//     Element.classList.add('alpha');
//     Element.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// document.body.style.background = 'blue';
// document.body.style.color = 'red';
// document.body.style.fontSize = '40px';
// // - додати цей блок в body.
// document.body.append(Element);
// // - клонувати його повністю, та додати клон в body.
// document.body.append(Element.cloneNode(true));
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
//   let divElement = document.createElement('div');
//   divElement.innerText = `${coursesAndDurationArrayElement.title}   ${coursesAndDurationArrayElement.monthDuration}`
//   document.body.append(divElement);
// }
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    let elementDiv = document.createElement('div');
    let elementh1 = document.createElement('h1');
    let elementP = document.createElement('p');
    elementDiv.classList.add('item');
    elementP.classList.add('description');
    elementh1.classList.add('heading');
    elementDiv.append(elementh1,elementP);
    document.body.append(elementDiv);
    elementh1.innerText = `${coursesAndDurationArrayElement.title}`
    elementP.innerText = `${coursesAndDurationArrayElement.monthDuration}`

}
