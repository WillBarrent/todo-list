function appearDOMElement(where, what) {
    try {
        where.appendChild(what);
    } catch (error) {
        console.log("Maybe your input is wrong")
    }
}

function createDOMElement(type, className) {
    const element = document.createElement(type);
    element.className = className;

    return element;
}

function createButton(elementName, className, textContent) {
    const element = createDOMElement(elementName, className);
    element.textContent = textContent;

    return element;
}

function createInput(type = 'text', className, placeholder, id = '', value = '', name = '') {
    const input = createDOMElement('input', 'todo__add-task');
    input.className = className;
    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
    input.value = value;

    return input;
}

export { appearDOMElement, createDOMElement, createButton, createInput };