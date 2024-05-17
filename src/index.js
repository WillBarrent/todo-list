import "./style.css";

import Projects from "./DOMRender/Projects";
import  ButtonsInvoke, { Buttons } from "./DOMRender/Buttons";
import { projectFormRender } from "./Pages/Components/Project";
import { addDefaultProjectItem} from "./Application/Project";
import { createProjectForm } from "./Pages/Components/ProjectForm";
import { addDefaultTodoItem } from "./Application/Todo";
import Page from "./DOMRender/Page";
import { createModal } from "./Pages/Components/Modal";

addDefaultProjectItem();
addDefaultTodoItem();
createProjectForm();

Buttons.projectsDropdownButton();
Page.render();

projectFormRender();

Projects.projectLoaderInvoke();