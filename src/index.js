import "./style.css";

import Page from "./DOMRender/Page";
import Projects from "./DOMRender/Projects";
import ButtonsInvoke from "./DOMRender/Buttons";
import { pageContent } from "./Pages/AllTodo";
import { projectFormRender } from "./Pages/Components/Project";
import { addDefaultProjectItem, getProjectItem } from "./Application/Project";
import { createProjectForm } from "./Pages/Components/ProjectForm";

// Page.pageLoaderInvoke();

addDefaultProjectItem();
createProjectForm();

Projects.projectLoaderInvoke();
pageContent();
ButtonsInvoke();
projectFormRender();