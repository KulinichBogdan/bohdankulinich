
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/elefant.jpeg') {
        myImage.setAttribute('src', 'images/elefant1.jpeg');
    } else {
        myImage.setAttribute('src', 'images/elefant.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please eneter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Elephants are beautiful, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Elephants are beautiful, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}


