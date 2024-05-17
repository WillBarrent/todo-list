import { appearDOMElement, createDOMElement, createButton } from "../Functions/DOMAppear";

`
<div class="content__info">
<div class="content__name">
  <span class="content__label-name">ToDo Name:</span>
  <span class="content__label-info">To Do Application</span>
</div>
<div class="content__description">
  <div class="content__label-name">Description:</div>
  <div class="content__label-info">This is my To Do Application. I create it for making your life easier and with less efforts.</div>
</div>
<div class="content__duedate">
  <div class="content__label-name">Duedate:</div>
  <div class="content__label-info">2024/01/01</div>
</div>
<div class="content__priority">
  <div class="content__label-name">Priority:</div>
  <div class="content__label-info">High</div>
</div>
<div class="content__project">
  <div class="content__label-name">Project name:</div>
  <div class="content__project-info">Default</div>
</div>
<div class="content__close">
  <div class="content__close--btn">Close</div>
</div>
</div>
`

export function createModal(name, description, duedate, priority, projectName) {
    const div = createDOMElement('div', 'content__info');

    const contentName = [createDOMElement('div', 'content__name'), ...modalItem('ToDo Name:', name)];
    const contentDescription = [createDOMElement('div', 'content__description'), ...modalItem('Description:', description)];
    const contentDuedate = [createDOMElement('div', 'content__duedate'), ...modalItem('Duedate', duedate)];
    const contentPriority = [createDOMElement('div', 'content__priority'), ...modalItem('Priority', priority)];
    const contentProject = [createDOMElement('div', 'content__project'), ...modalItem('Project', projectName)];

    const contentClose = createButton('div', 'content__close');
    const contentCloseButton = createButton('div', 'content__close--btn', 'Close');

    appearDOMElement(contentName[0], contentName[1]);
    appearDOMElement(contentName[0], contentName[2]);

    appearDOMElement(contentDescription[0], contentDescription[1]);
    appearDOMElement(contentDescription[0], contentDescription[2]);
    
    appearDOMElement(contentDuedate[0], contentDuedate[1]);
    appearDOMElement(contentDuedate[0], contentDuedate[2]);
    
    appearDOMElement(contentPriority[0], contentPriority[1]);
    appearDOMElement(contentPriority[0], contentPriority[2]);
    
    appearDOMElement(contentProject[0], contentProject[1]);
    appearDOMElement(contentProject[0], contentProject[2]);

    appearDOMElement(div, contentName[0]);
    appearDOMElement(div, contentDescription[0]);
    appearDOMElement(div, contentDuedate[0]);
    appearDOMElement(div, contentPriority[0]);
    appearDOMElement(div, contentProject[0]);
    appearDOMElement(div, contentClose);
    appearDOMElement(contentClose, contentCloseButton);

    return div;
}

function modalItem(labelName, infoText) {
    const label = createDOMElement('div', 'content__label-name');
    const info = createDOMElement('div', 'content__project-info');

    label.textContent = labelName;
    info.textContent = infoText;

    return [label, info];
}