import "./style.css";

import Projects from "./DOMRender/Projects";
import  { Buttons } from "./DOMRender/Buttons";
import { projectFormRender } from "./Pages/Components/Project";
import { addDefaultProjectItem} from "./Application/Project";
import { createProjectForm } from "./Pages/Components/ProjectForm";
import { addDefaultTodoItem } from "./Application/Todo";
import Page from "./DOMRender/Page";

addDefaultProjectItem();
addDefaultTodoItem();
createProjectForm();

Buttons.projectsDropdownButton();
Page.render();

projectFormRender();

Projects.projectLoaderInvoke();