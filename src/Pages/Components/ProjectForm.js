import { appearDOMElement, createDOMElement, createButton, createInput } from "../Functions/DOMAppear";

`
<form action="" class="add-project hidden">
<input type="text" class="add-project__title" placeholder="Project Name">
<div class="add-project__buttons">
  <div class="add-project__cancel">Cancel</div>
  <div class="add-project__add">Add</div>
</div>
</form>
`

export function createProjectForm(func = 'Add') {
    const sidebar = document.querySelector('.sidebar');

    const form = createDOMElement('form', 'add-project');
    if (func === 'Add') form.classList.add('hidden');
    else form.classList.add('project-edit-form');
    
    const input = createInput('text', 'add-project__title', 'Project Name');
    const projectFormButtons = createDOMElement('div', 'add-project__buttons');
    const projectFormCancel = createDOMElement('div', 'add-project__cancel')
    const projectFormButton = createDOMElement('div', 'add-project__add');

    projectFormCancel.textContent = 'Cancel';
    projectFormButton.textContent = func;

    appearDOMElement(sidebar, form);
    appearDOMElement(form, input);
    appearDOMElement(form, input);
    appearDOMElement(form, projectFormButtons);
    appearDOMElement(projectFormButtons, projectFormCancel);
    appearDOMElement(projectFormButtons, projectFormButton);

    return form;
}