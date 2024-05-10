import { appearDOMElement, createDOMElement } from "../Functions/DOMAppear";

const image = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg>`;

export function createProjectItem(title = 'Default') {
    const project = createDOMElement('div', 'project');
    const img = createDOMElement('div', 'project-img');
    img.innerHTML = image;
    const name = createDOMElement('div', 'project-name');
    name.textContent = title;

    const projectSettings = createDOMElement('div', 'project-settings');

    const renameProject = createDOMElement('div', 'project-rename');
    const deleteProject = createDOMElement('div', 'project-delete');

    renameProject.classList.add('project-settings-rename');
    deleteProject.classList.add('project-settings-delete');

    renameProject.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 16L11 20H21V16H15M12.06 7.19L3 16.25V20H6.75L15.81 10.94L12.06 7.19M18.71 8.04C19.1 7.65 19.1 7 18.71 6.63L16.37 4.29C16.17 4.09 15.92 4 15.66 4C15.41 4 15.15 4.1 14.96 4.29L13.13 6.12L16.88 9.87L18.71 8.04Z" /></svg>';
    deleteProject.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';

    appearDOMElement(projectSettings, renameProject);
    appearDOMElement(projectSettings, deleteProject);

    appearDOMElement(project, img);
    appearDOMElement(project, name);
    appearDOMElement(project, projectSettings);
    return project;
}
