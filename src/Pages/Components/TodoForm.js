import { appearDOMElement, createDOMElement, createButton, createInput } from "../Functions/DOMAppear";

function images() {
  return {
    duedate: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg>',
    priority:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,19H22V17H14V19M14,13.5H22V11.5H14V13.5M14,8H22V6H14V8M2,12.5C2,8.92 4.92,6 8.5,6H9V4L12,7L9,10V8H8.5C6,8 4,10 4,12.5C4,15 6,17 8.5,17H12V19H8.5C4.92,19 2,16.08 2,12.5Z" /></svg>',
    project: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg>',
  };
}

function createTodoItemForm() {
    const form = createDOMElement('form', 'todo__form');

    appearDOMElement(form, createTodoButtons());

    return form;
}

function createTodoButtons() {
  const div = createDOMElement('div', 'todo__add-task--btn');

  const icon = createButton('div', 'todo__add-task--icon', '+');
  const button = createButton('div', 'todo__add-task--title', 'Add task');

  appearDOMElement(div, icon);
  appearDOMElement(div, button);

  return div;
}

function createTodoAddForm(projectName = 'Default') {
  const form = createDOMElement('form', 'todo__add-task');
  form.classList.add('hidden');

  const inputTitle = createInput('text', 'todo__add-task--name', 'Task name');
  const inputDescription = createInput('text', 'todo__add-task--description', 'Description');

  appearDOMElement(form, inputTitle);
  appearDOMElement(form, inputDescription);

  appearDOMElement(form, createTodoSettings());
  appearDOMElement(form, createTodoSubmit(projectName));

  return form;
}

function createTodoSettings() {
  const div = createDOMElement('div', 'todo__add-task--settings');
  const duedate = createDOMElement('div', 'duedate');
  const priority = createDOMElement('div', 'priority');

  const duedateTitle = createSettingsTitle('duedate', 'duedate', 'Due Date');
  const priorityTitle = createSettingsTitle('priority', 'priority', 'Priority');

  appearDOMElement(div, duedate);
  appearDOMElement(div, priority);

  appearDOMElement(duedate, duedateTitle);
  appearDOMElement(priority, priorityTitle);

  appearDOMElement(duedate, createDuedateSettings());
  appearDOMElement(priority, createPrioritySettings());

  return div;
} 

function createSettingsTitle(title, image, textContent) {
  const div = createDOMElement('div', `${title}-title`);
  const img = createDOMElement('span', `${title}-img`);
  const text = createDOMElement('span', `${title}-text`);

  img.innerHTML = images()[image];
  text.textContent = textContent;

  appearDOMElement(div, img);
  appearDOMElement(div, text);

  return div;
}

function createDuedateSettings() {
  const div = createDOMElement('div', 'duedate__settings');
  div.classList.add('hidden');

  const calendar = createDOMElement('div', 'duedate__item');
  const label = createDOMElement('label', 'duedate__label');
  label.textContent = 'Date: ';
  label.for = 'date';
  const input = createInput('date', 'duedate__date', '', 'date', '2025-01-01');
  appearDOMElement(calendar, label);
  appearDOMElement(calendar, input);

  appearDOMElement(div, calendar);

  return div;
}

function createPrioritySettings() {
  const div = createDOMElement('div', 'priority__settings');
  div.classList.add('hidden');

  const low = createPriorityItem('Low', 'low');
  const medium = createPriorityItem('Medium', 'medium');
  const high = createPriorityItem('High', 'high');
  const none = createPriorityItem('None', 'none');

  appearDOMElement(div, low);
  appearDOMElement(div, medium);
  appearDOMElement(div, high);
  appearDOMElement(div, none);

  return div;
}

function createTodoSubmit(projectName = 'Default') {
  const div = createDOMElement('div', 'todo__add-task--add');

  const project = createDOMElement('div', 'todo__add-task--project');
  const projectTitle = createDOMElement('div', 'todo__add-task--project-title');
  const projectImage = createDOMElement('span', 'todo__add-task--project-img');
  const projectText = createDOMElement('span', 'todo__add-task--project-text');

  projectImage.innerHTML = images()['project'];
  projectText.textContent = projectName;

  const allProjects = createDOMElement('div', 'todo__add-task--project-projects');
  allProjects.classList.add('hidden');

  appearDOMElement(div, project);

  appearDOMElement(project, projectTitle);
  appearDOMElement(project, allProjects);

  appearDOMElement(projectTitle, projectImage);
  appearDOMElement(projectTitle, projectText);

  appearDOMElement(div, createButton('div', 'todo__add-task--cancel-text', 'Cancel'));
  appearDOMElement(div, createButton('div','todo__add-task--add-text', 'Add'));

  return div;
}

function createPriorityItem(titleText, priority) {
  const div = createDOMElement('div', 'priority__item');
  const circle = createDOMElement('span', 'priority__circle'); 
  circle.dataset.prioritySet = priority;
  circle.classList.add(priority);
  const title = createDOMElement('span', 'priority__title'); 
  title.textContent = titleText;

  appearDOMElement(div, circle);
  appearDOMElement(div, title);

  return div;
}

function createProjectItem(title) {
  const div = createDOMElement('div', 'todo__add-task--item');
  div.textContent = title;
  return div;
}

export { createTodoItemForm, createTodoAddForm, createButton };