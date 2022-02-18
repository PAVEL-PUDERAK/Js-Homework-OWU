// - створити функцію яка обчислює та повертає площу прямокутника висотою
// area = (a,b) => a * b;
// console.log(area(100,500))

// // - створити функцію яка обчислює та повертає площу круга
//  circle = (r) => r*2*3.14;
// console.log(circle(90))
// //- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
// cylinder = (h,r) => 2*3.14*r*h;
// console.log(cylinder(100,500))
// //- створити функцію яка приймає масив та виводить кожен його елемент
// let arrays = ["Hello","World",1,3,10,true,false]
// CreatorArray = (arrays) => {
//     for (let i = 0; i < arrays.length; i++) {
//         const array = arrays[i];
//         console.log(array)
//     }
// }
// CreatorArray(arrays)
// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// CreateParagraph = (sometext) => {
//         document.write(`<div><p>${sometext}</p></div>`)
// }
// CreateParagraph("Хочеш Шоколадку ? ")
// //  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// CreatorUl = (someText,number ) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++)
//     document.write(`<li>${someText}</li>`)
//     document.write(`</ul>`)
//        }
// CreatorUl("Hello World", 10)
//або
// CreatorUl = (SomeText) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++)
//     document.write(`<li>${SomeText}</li>`)
//     document.write(`</ul>`)
//
// }
// CreatorUl("HELLO WORLD")
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//Зробив вище сюад ще раз переписав на всякий )
// CreatorUl = (SomeText,number ) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++)
//     document.write(`<li>${SomeText}</li>`)
//     document.write(`</ul>`)
// CreatorUl("Hello World", 10)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,2,3,4,5,"six","seven","eight",true,false]
// CreatorArray = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// CreatorArray (array)
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let ArrayWithObjects = [{id: "Sonic", name: "Pavel", age: 26 },{id: "Vami", name: "Vasia",age: 27,},{id: "Kate", name: "Katerina", age: 27}];
CreatorArr = (ArrayWithObjects) =>{
    for (let i = 0; i < ArrayWithObjects.length; i++) {
        let arrayWithObject = ArrayWithObjects[i];
        document.write(`<div>${arrayWithObject.id} - ${arrayWithObject.name} - ${arrayWithObject.age}</div>`)
    }
}
CreatorArr (ArrayWithObjects)