// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let array = [[1,2,3,4,5,],["null","null","null","null","null"],["a",12,23,true,false]]
// {
//     console.log(array[0]);
//     console.log(array[1]);
//     console.log(array[2]);
//     console.log(array);
// }
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// ну це я так поняв це так як я вивів в попередньому завданні до мене це добре дойшло  і я відпазу так і прописав ну але я зроблю ще разок )
// let array = [];
// array[0] = 12;
// array[1] = 24;
// array[2] = 25;{
//    console.log(array)

// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let divcontents = [
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько",
//     "Хочеш їсти? З`їж печенько"
// ];
//
// for (let divcontent of divcontents) {
// document.write(`<div>${divcontent}</div>`)
// }
// let divcontents = [
//     "Хочеш їсти? З`їж печенько"
// ]
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${divcontents}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let hcontents = [
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)",
//     "НЕ Знавщо написати пишу це)"
// ];
// //Якщо я не ітерую а просто вивожу значення то в мене виконується дія безкінечно і зависає браузер
// let hcontent = 0
// while (hcontents.length > hcontent){
//     document.write(`<h1>${hcontents[hcontent]}</h1>`)
//     hcontent++;
// }
// let i = 0
// while (i < hcontents.length) {
//     document.write(`<h1>${hcontents[i]}</h1>`)
//     i++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number)
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringsNum = ["ONE","TWO","three","four","five","six","seven","eight","nine","ten"]
// for (let i = 0; i < stringsNum.length; i++) {
//     let stringsNumElement = stringsNum[i];
//     console.log(stringsNumElement)
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let strandNumm = ["ONE","TWO","three",4,5,6,7,8,true,false]
// for (let i = 0; i < strandNumm.length; i++) {
//     const strandNummElement = strandNumm[i];
//     console.log(strandNummElement);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let strandNumm = ["ONE","TWO","three",4,5,6,7,8,true,false]
// for (let i = 0; i < strandNumm.length; i++) {
//     let strandNummElement = strandNumm[i];
//     if (typeof strandNummElement === "boolean")
//  console.log(strandNummElement);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let strandNumm = ["ONE","TWO","three",4,5,6,7,8,true,false]
// for (let i = 0; i < strandNumm.length; i++) {
//     let strandNummElement = strandNumm[i];
//     if (typeof strandNummElement === "number")
//     console.log(strandNummElement)
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let strandNumm = ["ONE","TWO","three",4,5,6,7,8,true,false]
// for (let i = 0; i < strandNumm.length; i++) {
//     let strandNummElement = strandNumm[i]
//     if (typeof strandNummElement === "string")
//     console.log(strandNummElement);
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let Array = [];
// Array[0] = 1
// Array[1] = 2
// Array[2] = "three"
// Array[3] = "four"
// Array[4] = "five"
// Array[5] = true
// Array[6] = false
// Array[7] = "eight"
// Array[8] = "nine"
// Array[9] = "ten"
// for (let i = 0; i < 10; i++) {
//     let arrayElement = Array[i];
//     console.log(arrayElement)
// }
// for (let arrayElement of Array) {
//     console.log(arrayElement)
//
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`<div><ul><li>${i}</li></ul></div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`<div><ul><li>${i}</li></ul></div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i)
//     document.write(`<div><ul><li>${i}</li></ul></div>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//         document.write(`<div><ul><li>${i}</li></ul></div>`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i % 2 === 1){
        console.log(i);
        document.write(`<div><ul><li>${i}</li></ul></div>`)
    }
}