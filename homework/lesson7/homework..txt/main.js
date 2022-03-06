// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//     {
//         function User(id, name, surname , email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//
//     }
// }
// let users = [];
//
// let user2 = new User(1,"PAVEL",'Puderak','blabla@lampa.com',3806302123);
// let user3 = new User(2,"Roma",'popko','ppopko@lampa.com',38063012123);
// let user1 = new User(3,"Kolia",'durko','Kolian@lampa.com',3806356123);
// let user4 = new User(4,"Kristia",'Smerko','smerko@lampa.com',3806302673);
// let user5 = new User(5,"Sonia",'Palka','palka@lampa.com',3806308923);
// let user6 = new User(6,"Olia",'Dub','dubok@lampa.com',38063029923);
// let user7 = new User(7,"Vika",'Kalika','kalika@lampa.com',3806322123);
// let user8 = new User(8,"Rostik",'Mostik','mostik@lampa.com',3806332123);
// let user9 = new User(9,"Vasia",'Asia','asia@lampa.com',3806355123);
// let user10 = new User(10,"Max",'Kushch','kushch@lampa.com',3806332123);
//
// users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
//
// console.log(users);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let Filter = users.filter(function (user) {
//     if (user.id % 2 === 0 ) {
//         return user;
//     }
// })
// console.log(Filter);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort(function (first, next) {
//     return first.id - next.id
// })); //перший приклад
// console.log(users.sort((first, second) => first.id - second.id)); //правда до мене дойшло після того як я прописав через func )
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let array = [];
let client1 = new Client(1,"PAVEL",'Puderak','blabla@lampa.com',3806302123,['toaster','book']);
let client2 = new Client(2,"Roma",'popko','ppopko@lampa.com',38063012123,['empty box','meat']);
let client3 = new Client(3,"Kolia",'durko','Kolian@lampa.com',3806356123,'cheese',);
let client4 = new Client(4,"Kristia",'Smerko','smerko@lampa.com',3806302673,['ps','blackboard','desk']);
let client5 = new Client(5,"Sonia",'Palka','palka@lampa.com',3806308923,['ps','meat','door']);
let client6 = new Client(6,"Olia",'Dub','dubok@lampa.com',38063029923,['xiaomi','meat','door','home cinema']);
let client7 = new Client(7,"Vika",'Kalika','kalika@lampa.com',3806322123,['sonytv']);
let client8 = new Client(8,"Rostik",'Mostik','mostik@lampa.com',3806332123,['xbox']);
let client9 = new Client(9,"Vasia",'Asia','asia@lampa.com',3806355123,'ps');
let client10 = new Client(10,"Max",'Kushch','kushch@lampa.com',3806332123,['ps','iphone']);
array.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
console.log(array);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(array.sort(function (first, second) {
    return first.order.length - second.order.length
}));

