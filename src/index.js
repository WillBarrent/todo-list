import "./style.css";

import Page from "./DOM/Page";
import Projects from "./DOM/Projects";
import ButtonsInvoke from "./DOM/Buttons";
import { createTodoItemForm, createTodoAddForm } from "./Pages/Components/TodoForm";
import { createTodoItem } from "./Pages/Components/TodoItem";

Page.pageLoaderInvoke();
Projects.projectLoaderInvoke();
ButtonsInvoke();