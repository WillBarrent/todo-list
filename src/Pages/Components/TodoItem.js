import { appearDOMElement, createDOMElement, createButton, createInput } from "../Functions/DOMAppear";

function images() {
    return {
        settings: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>',
        project: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg>'
    }
}

function createTodoItem(title = 'Title', duedate = 'none', priority = 'none', project = 'Default') {
    const div = createDOMElement('div', 'todo__item');
    const input = createInput('checkbox', 'todo__checkbox');
    const label = createDOMElement('label', 'todo__title');
    label.dataset.priority = priority;

    const text = createDOMElement('span', 'todo__text');
    text.textContent = title;

    const settings = createDOMElement('span', 'todo__settings');
    settings.innerHTML = images()['settings'];

    const allSettings = createDOMElement('div', 'todo__settings-all');
    allSettings.classList.add('hidden');
    const editTodo = createTodoSettingsItem('Edit', 'edit-todo');
    const deleteTodo = createTodoSettingsItem('Delete', 'delete-todo');
    const infoTodo = createTodoSettingsItem('Info', 'info-todo');

    const duedateInfo = createDOMElement('span', 'todo__duedate');
    duedateInfo.textContent = duedate;

    const projectName = createDOMElement('span', 'todo__project-name');
    const projectImg = createDOMElement('span', 'todo__project-img');
    projectImg.innerHTML = images()['project'];
    const projectTitle = createDOMElement('span', 'todo__project-title')
    projectTitle.textContent = project;

    appearDOMElement(div, input);
    appearDOMElement(div, label);

    appearDOMElement(label, text);
    appearDOMElement(label, settings);

    appearDOMElement(settings, allSettings);

    appearDOMElement(allSettings, editTodo);
    appearDOMElement(allSettings, deleteTodo);
    appearDOMElement(allSettings, infoTodo);

    appearDOMElement(label, duedateInfo);
    appearDOMElement(label, projectName);

    appearDOMElement(projectName, projectImg);
    appearDOMElement(projectName, projectTitle);

    return div;
}

function createTodoSettingsItem(textContent, additionClass) {
    const div = createDOMElement('div', 'todo__settings-item');
    div.classList.add(additionClass);
    div.textContent = textContent;

    return div;
}

export {createTodoItem};