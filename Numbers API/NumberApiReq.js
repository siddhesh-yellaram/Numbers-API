var factBtn = document.getElementById('facts');
factBtn.addEventListener('click', getFacts);
var mainDiv = document.getElementById('main');

function getFacts(e) {
    e.preventDefault();
    var num = document.getElementById('numberInput').value;
    var fact;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        renderingDOM(xhr.responseText);
    })

    if (num === "") {
        alert("Please Enter A No!!!!")
    }
    else {
        var path = "http://numbersapi.com/" + num;
        xhr.open("GET", path);
        fact = xhr.send();
    }
}

function renderingDOM(fact) {
    var p = document.createElement('p');
    p.innerHTML = fact;
    mainDiv.appendChild(p);
}