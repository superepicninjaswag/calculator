const dice = document.querySelectorAll('.die');

dice.forEach((die) => {
    const addButton = die.querySelector('button.add');
    const subtractButton = die.querySelector('button.subtract');

    addButton.addEventListener('click', add);
    subtractButton.addEventListener('click', subtract);
});

function add(e) {
    const valueNode = e.target.parentNode.querySelector('.value');
    let valueInt = parseInt(valueNode.textContent);
    valueNode.textContent = (valueInt + 1).toString();
}

function subtract(e) {
    const valueNode = e.target.parentNode.querySelector('.value');
    let valueInt = parseInt(valueNode.textContent);
    if (valueInt > 0) {
        valueNode.textContent = (valueInt - 1).toString();
    }
}