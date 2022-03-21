let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);
FatherDiv = document.createElement('div');
ChildDiv = document.createElement('div');
let userID = document.createElement('h4');
let PostId = document.createElement('h5');
let PostTitle = document.createElement('div');
let PostBody = document.createElement('p');
let Button = document.createElement('button');
let FatherPosts = document.createElement('div')
FatherPosts.classList.add(`FatherPosts`)
Button.classList.add('btn')
ChildDiv.classList.add('div-for-posts')
FatherDiv.classList.add('div-forDetailsFather')
userID.innerText = post.userId;
PostId.innerText = post.id;
PostTitle.innerText = post.title;
PostBody.innerText = post.body;
Button.onclick = function (){
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((value => value.json()))
    .then(jsonValue => {
        for (const jsonValueElement of jsonValue) {
            let Posts = document.createElement('div');
            let postId = document.createElement('h4');
            let id = document.createElement('h5');
            let email = document.createElement('p');
            let body = document.createElement('p');
            let name = document.createElement('div');
            postId.innerText = jsonValueElement.postId;
            id.innerText = jsonValueElement.id;
            email.innerText = jsonValueElement.email;
            body.innerText = jsonValueElement.body;
            name.innerText = jsonValueElement.name;
            Posts.append(postId,id,name,email,body);
            FatherPosts.append(Posts)
            Posts.classList.add('Child-Post')

            FatherDiv.append(FatherPosts)
            console.log(jsonValueElement);
        }
    });
}
ChildDiv.append(userID,PostId,PostTitle,PostBody);
FatherDiv.append(ChildDiv,Button)
document.body.appendChild(FatherDiv);
