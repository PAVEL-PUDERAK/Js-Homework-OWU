let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let divFather = document.createElement('div');
let address = document.createElement('div');
let company = document.createElement('p');
let email = document.createElement('p');
let id = document.createElement('h5');
let name = document.createElement('h3');
let phone = document.createElement('p');
let username = document.createElement('h2');
let website = document.createElement('p');
let ChildDiv = document.createElement('div');
ChildDiv.classList.add('div-forDetails');
divFather.classList.add('div-forDetailsFather');
company.innerHTML = `Company: ${user.company}`;
address.innerHTML = `Address: ${user.address}`;
email.innerHTML = `Email: ${user.email}`;
id.innerHTML = user.id;
name.innerHTML = `${user.name}`;
phone.innerHTML = `Phone: ${user.phone}`;
username.innerHTML = `${user.username}`;
website.innerHTML = `Website: ${user.website}`;
ChildDiv.append(id,username,name,email,company,address,phone,website);
divFather.appendChild(ChildDiv)
document.body.appendChild(divFather)
