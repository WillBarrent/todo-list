function appearDOMElement(where, what) {
    try {
        where.appendChild(what);
    } catch (error) {
        console.log(error)
        console.log("Maybe your input is wrong")
    }
}

function afterAppearDOMElement(from, what) {
    from.after(what);
}

function beforeAppearDOMElement(from, what) {
    from.prepend(what);
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
    const input = createDOMElement('input', className);
    input.className = className;
    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
    input.value = value;

    return input;
}

export { appearDOMElement, afterAppearDOMElement, beforeAppearDOMElement, createDOMElement, createButton, createInput };