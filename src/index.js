import "./style.css";

import Page from "./DOMRender/Page";
import Projects from "./DOMRender/Projects";
import ButtonsInvoke from "./DOMRender/Buttons";
import { pageContent } from "./Pages/AllTodo";
import { projectFormRender } from "./Pages/Components/Project";
import { addDefaultProjectItem, getProjectItem } from "./Application/Project";
import { createProjectForm } from "./Pages/Components/ProjectForm";
import { todoFormRender } from "./Pages/Components/Todo";
import { addDefaultTodoItem } from "./Application/Todo";
import Todo from "./DOMRender/Todo";

// Page.pageLoaderInvoke();

addDefaultProjectItem();
addDefaultTodoItem();

createProjectForm();

pageContent();
ButtonsInvoke();
projectFormRender();

todoFormRender();

Projects.projectLoaderInvoke();
Todo.todoLoaderInvoke();