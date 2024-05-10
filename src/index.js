import "./style.css";

import Page from "./DOM/Page";
import Projects from "./DOM/Projects";
import ButtonsInvoke from "./DOM/Buttons";
import { pageContent } from "./Pages/AllTodo";
import { projectFormRender } from "./Pages/Components/Project";
import { addDefaultProjectItem, getProjectItem } from "./Application/Project";

// Page.pageLoaderInvoke();

addDefaultProjectItem();

Projects.projectLoaderInvoke();
pageContent();
ButtonsInvoke();
projectFormRender();