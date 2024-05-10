import { addProjectItem } from "../../Application/Project";
import Projects from "../../DOM/Projects";

const addProject = document.querySelector('.add-project__add');
const projectTitle = document.querySelector('.add-project__title');

export function projectFormRender() {
    addProject.addEventListener('click', function() {
        try {
            addProjectItem(projectTitle.value);
            Projects.projectLoaderInvoke();
        }
        catch(e) {
            console.log("That`s title already exist");
        }
    })
}