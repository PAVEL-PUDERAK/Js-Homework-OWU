// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let username = document.getElementById('username')
// let userAge = document.getElementById('userAge')
// let button = document.getElementById('buttonPush')
// button.onclick = function () {
//     let users = [username.value,userAge.value];
//     localStorage.setItem('users', JSON.stringify(users))
// }
// let form = document.forms[0];
// form.onsubmit = function (e) {
//     e.preventDefault()
// }
    // -створити форму з інпутами для model,type та volume автівки.
    // при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form =  document.getElementById(`Form`);
form.onsubmit = function (e) {
    e.preventDefault()
}

let cars = JSON.parse(localStorage.getItem('CarsArray')) || []
let button = document.getElementById('SecondButton')
button.onclick = function () {
    let model = document.getElementById('model');
    let type = document.getElementById('type')
    let volume = document.getElementById('volume');
    let car = [model.value,type.value,volume.value];
    cars.push(car);
    localStorage.setItem('cars',JSON.stringify(cars));
}

