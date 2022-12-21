let button = document.querySelector("#enter");
let input = document.querySelector("#userinput");
let ul = document.querySelector("ul");
let items = document.querySelectorAll("li");

function lengthOfword() {
    return input.value.length;
};

function createAndAddElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    // create both buttons
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.textContent = "Done";
    button2.textContent = "Delete";
    li.appendChild(button1);
    li.appendChild(button2);
    ul.appendChild(li);
    input.value = "";

    button1.addEventListener('click', function() {
        li.classList.toggle('done');
    });

    button2.addEventListener('click', function() {
        li.parentNode.removeChild(li);
    })
};

// Work with current ul elements
Array.from(items).forEach(function(item){
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.textContent = "Done";
    button2.textContent = "Delete";
    item.appendChild(button1);
    item.appendChild(button2);

    button1.addEventListener('click', function() {
        item.classList.toggle('done');
    });

    button2.addEventListener('click', function() {
        item.parentNode.removeChild(item);
    });
});


function reactForButtonClick() {
    if (lengthOfword()){
        createAndAddElement();
    };
};

function reactForKeyPress(event) {
    if (lengthOfword() && event.which === 13){
        createAndAddElement();
    }
}

button.addEventListener('click', reactForButtonClick);
input.addEventListener('keypress', reactForKeyPress);