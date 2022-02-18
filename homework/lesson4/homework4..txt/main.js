// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area (a,b){
//     let area = a*b ;
//     return area;
// }
// console.log(area(5,6))
//
// //обчислити я обчислив а вот як повернути прощину я щось не дуже зрозумів тому підглянув не знаю правильно ні відпишіть будьласька )
// console.log(30+area(5,6))
// // - створити функцію яка обчислює та повертає площу круга
// function cirle(r){
//     let radius = r * 2
//     let circle = radius * 3.14
//     return circle
// }
// console.log(cirle(90))
// //- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
// function cylinder(r,h){
//     let radius = 2 * r
//     let circle = radius * 3.14
//     let cylinder = circle * h
//     return cylinder
// }
// console.log(cylinder(10,20))
// //- створити функцію яка приймає масив та виводить кожен його елемент
// let arrays = ["Hello","World",1,3,10,true,false]
// function CreateArray(arrays){
//     for (let i = 0; i < arrays.length; i++) {
//         let array = arrays[i];
//         console.log(array);
//     }
// }
// CreateArray(arrays);
// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function CreateParagraph(text){
//     document.write(`<div><p>${text}</p></div>`)
//     }
//     CreateParagraph("Хочеш Їсти зїж печенько")
//     CreateParagraph("Авжеш хочу")
// //  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function CreateUl(arg){
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
//        }
//        CreateUl('HelloWORLD' );
//         CreateUl('HOW ARE YOU?' );
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function CreateUl(arg,number){
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
//        }
//        CreateUl("Hello World", 3)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,2,3,4,5,"six","seven","eight",true,false]
// function arrays(array){
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
//     }
//
// arrays(array)
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let ArrayWithObjects = [{id: "Sonic", name: "Pavel", age: 26 },{id: "Vami", name: "Vasia",age: 27,},{id: "Kate", name: "Katerina", age: 27}];
// function Arrayobj(ArrayWithObjects) {
//     for (let arrayWithObject of ArrayWithObjects) {
//         document.write(`<div>${arrayWithObject.id} - ${arrayWithObject.name} - ${arrayWithObject.age}</div>`)
//
//     }
// }
// Arrayobj(ArrayWithObjects)