fetch('https://jsonplaceholder.typicode.com/users')
    .then((value => value.json()))
    .then(jsonValue => {
        let Fatherdiv = document.createElement('div')
        for (let jsonValueElement of jsonValue) {
           let ElementName = document.createElement('h2');
           let ElementDiv = document.createElement('div');
           let ElementButton = document.createElement('button');
           let ChildDiv = document.createElement('div');
           ElementName.innerText = jsonValueElement.id;
            ElementDiv.innerText = jsonValueElement.name;
            ChildDiv.append(ElementName,ElementDiv,ElementButton);
            Fatherdiv.appendChild(ChildDiv);
            ElementButton.innerText = 'Click to show!'
            ElementButton.classList.add('btn');
            Fatherdiv.classList.add('father-div');
            ChildDiv.classList.add('child-div');
            ElementButton.onclick = () =>{
                document.location = `./user-details.html?data=${JSON.stringify(jsonValueElement)}`;
            }
        }


        let hrElement  = document.createElement('hr')
        let hr1Element  = document.createElement('hr')
        document.body.append(hr1Element,Fatherdiv,hrElement);
    });