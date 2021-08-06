var factBtn = document.getElementById('facts');
factBtn.addEventListener('click', getFacts);
var mainDiv = document.getElementById('main');

function getFacts(e) {
    e.preventDefault();
    var num = document.getElementById('numberInput').value;
    var fact;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        var response = xhr.responseText;
        renderingDOM(response);
        saveDataToLocalStorage(response, num);
    });

    if (num === "" || (!isNaN((num)) === false)) {
        alert("Please Enter A No!!!!")
    }
    else {
        var path = "http://numbersapi.com/" + num;
        xhr.open("GET", path);
        fact = xhr.send();

        if (num % 2 === 0) {
            document.body.style.backgroundColor = "red";
        } else {
            document.body.style.backgroundColor = "blue";
        }
    }
}

function renderingDOM(fact) {
    var p = document.createElement('p');
    p.className = "randomFacts";
    p.innerHTML = fact;
    mainDiv.appendChild(p);
}

function saveDataToLocalStorage(facts, num) {
    newFacts = {};
    newFacts.id = Date.now();
    newFacts.entry = moment().format('MMMM Do YYYY, h:mm:ss a');
    newFacts.day = moment().format("[Today is] dddd");
    newFacts.time = moment.duration(-1, 'minutes').humanize(true);
    newFacts.randomFact = facts;
    newFacts.factNo = num;

    var factsList = getDataFromLocalStorage();
    factsList.push(newFacts);

    localStorage.setItem("New facts", JSON.stringify(factsList));
}

function getDataFromLocalStorage() {
    if (localStorage.getItem('New facts') === null) {
        var factsList = [];
        return factsList;
    }

    factsList = JSON.parse(localStorage.getItem('New facts'));
    return factsList;
}
