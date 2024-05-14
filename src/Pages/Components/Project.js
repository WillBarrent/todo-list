import { addProjectItem, updateProjectItem } from "../../Application/Project";
import Projects from "../../DOMRender/Projects";
import { afterAppearDOMElement } from "../Functions/DOMAppear";
import { createProjectForm } from "./ProjectForm";

const addProject = document.querySelector(".add-project__add");
const projectTitle = document.querySelector(".add-project__title");

function projectFormRender() {
  addProject.addEventListener("click", function () {
    try {
      addProjectItem(projectTitle.value);
      Projects.projectLoaderInvoke();
      // Projects.projectDropdownLoader();
    } catch (e) {
      console.log(e);
      console.log("ERROR");
    }
  });
}

function projectFormUpdateRender(project) {
    afterAppearDOMElement(project, createProjectForm('Edit'));

    const updateForm = document.querySelector('.project-edit-form');
    const updateButton = updateForm.querySelector('.add-project__add');
    const projectTitle = project.querySelector('.project-name').textContent;

    updateButton.addEventListener('click', function() {
        try {
            if (projectTitle === 'Default') throw new Error();

            const input = updateForm.querySelector('input');
            updateProjectItem(input.value, projectTitle);

            Projects.projectLoaderInvoke();
            Projects.projectPageUpdate(input.value);
            Projects.projectDropdownLoader();
        }
        catch(e) {
            console.log("ERROR");
        }
    });
}

export { projectFormRender, projectFormUpdateRender };
