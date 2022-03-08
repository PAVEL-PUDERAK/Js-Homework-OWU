// -- отримує текст з параграфа з id "content"
let Content = document.getElementById('content')
console.log(Content);
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
console.log(rules);
// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('rules').innerHTML = `<div>HELLO WORLD</div>`
// document.getElementById('rules').innerHTML = `Hello World`
// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerHTML = `<ul><li>hello</li><li>hello</li><li>hello</li></ul>`
// -- змініть кожному елементу колір фону на червоний
// let ChildBg =  document.children;
// for (const childBgElement of ChildBg) {
//     childBgElement.style.background = 'red';
//     childBgElement.style.color = 'blue';
// }
// -- змініть кожному елементу колір тексту на синій

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let ClassRules =  document.getElementById('rules');
// console.log(ClassRules.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
ClassRules = document.getElementsByClassName('fc_rules');
for (let i = 0; i < ClassRules.length; i++) {
    const childBgElement = ClassRules[i];
    childBgElement.style.color = 'red'
}


