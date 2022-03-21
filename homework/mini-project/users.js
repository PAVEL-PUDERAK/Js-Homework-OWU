let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user.company);
let divFather = document.createElement('div');
let address = document.createElement('div');
let company = document.createElement('div');
let email = document.createElement('p');
let id = document.createElement('h5');
let name = document.createElement('h3');
let phone = document.createElement('p');
let username = document.createElement('h2');
let website = document.createElement('p');
let ChildDiv = document.createElement('div');
let Button = document.createElement('button')
let divFatherPost = document.createElement('div')
company.classList.add('div-for-text')
divFatherPost.classList.add('div-for-posts')
Button.classList.add('btn-details')
address.classList.add('div-for-text')
ChildDiv.classList.add('div-forDetails');
divFather.classList.add('div-forDetailsFather');
company.innerHTML = `Company: <br>${user.company.bs} <br> ${user.company.catchPhrase} <br> ${user.company.name}`;
address.innerHTML = `Address: <br> ${user.address.street} - ${user.address.suite} - ${user.address.city} - ${user.address.zipcode} - ${user.address.geo.lat}- ${user.address.geo.lng}`;
email.innerHTML = `Email: ${user.email}`;
id.innerHTML = user.id;
name.innerHTML = `${user.name}`;
phone.innerHTML = `Phone: ${user.phone}`;
username.innerHTML = `${user.username}`;
website.innerHTML = `Website: ${user.website}`;
Button.innerText = 'post of current user'
Button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((value => value.json()))
        .then(jsonValue => {

            for (let jsonValueElement of jsonValue) {
                let ChildDivPost = document.createElement('div')
                ChildDivPost.classList.add('div-for-post')
                ChildDivPost.innerHTML = jsonValueElement.title;
                let ButtonForPost = document.createElement('button')
                ButtonForPost.classList.add('btn');
                divFatherPost.appendChild(ChildDivPost);
                ChildDivPost.appendChild(ButtonForPost);
                ButtonForPost.onclick = () =>{
                    document.location = `./post-details.html?data=${JSON.stringify(jsonValueElement)}`;
                }
            }

        });
}


ChildDiv.append(id, username, name, address, company, email, phone, website);
divFather.append(ChildDiv, Button, divFatherPost);
document.body.appendChild(divFather);
