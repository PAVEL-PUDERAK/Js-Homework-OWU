// //  1.
//  // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Стилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередині div.post
// //  https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((value => value.json()))
    .then(jsonValue => {
        let divValueFather = document.createElement('div')

        for (let jsonValueElement of jsonValue) {
            let userId = document.createElement('h3');
            let title = document.createElement('h4');
            let  id =  document.createElement('h5');
            let body = document.createElement('p');
            let divChild = document.createElement('div');
            userId.innerHTML = `${jsonValueElement.userId}`
            title.innerHTML = `${jsonValueElement.title}`
            id.innerHTML = `${jsonValueElement.id}`
            body.innerHTML = `${jsonValueElement.body}`
            divChild.append(userId,id,title,body);
            divChild.classList.add('child')
            divValueFather.classList.add('flex')

            // divChild.innerHTML = `<h3>${jsonValueElement.userId}</h3>
            //                      <h4>${jsonValueElement.id}</h4>
            //                      <h5>${jsonValueElement.title}</h5>
            //                      <p>${jsonValueElement.body}</p>`
            divValueFather.append(divChild)
        }
        document.body.append(divValueFather);

    })
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередині div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((value => value.json()))
    .then(jsonValue => {
        let divFatherComm = document.createElement('div')
        for (let jsonValueElement of jsonValue) {
        let ChildComm = document.createElement('div');
        let postId = document.createElement('h3');
        let id = document.createElement('div');
        let name = document.createElement('div');
        let email =document.createElement('div');
        let body = document.createElement('p');
        let hr = document.createElement('hr');
        let hr1 = document.createElement('hr');
        let hr2 = document.createElement('hr');
        ChildComm.classList.add('comment');
        divFatherComm.classList.add('comments');

        postId.innerHTML = `PostId: ${jsonValueElement.postId}`;
        id.innerHTML =  `Id: ${jsonValueElement.id}`;
        name.innerHTML =  `<b>Name</b>: ${jsonValueElement.name}`;
        email.innerHTML = `<b>Email</b>: ${jsonValueElement.email}`;
        body.innerHTML =  `${jsonValueElement.body}`;
        ChildComm.append(postId,hr2,id,name,email,hr,body,hr1);
        divFatherComm.append(ChildComm,);

        }
        document.body.appendChild(divFatherComm);
    });