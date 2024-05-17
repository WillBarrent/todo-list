import ButtonsInvoke, { Buttons } from "../DOMRender/Buttons";
import Projects from "../DOMRender/Projects";
import Todo from "../DOMRender/Todo";
import { todoFormRender } from "./Components/Todo";
import { createTodoItemForm, createTodoAddForm } from "./Components/TodoForm";
import { appearDOMElement } from "./Functions/DOMAppear";

export function projectPageContent(e) {
  const element = e.target;

  if (element.classList.contains("project-name")) {
    const header = document.querySelector(".header");
    const content = document.querySelector(".content");
    const projectName = element.textContent;

    header.textContent = "Project: " + projectName;

    content.innerHTML = "";

    Todo.projectTodoItems(projectName);

    appearDOMElement(content, createTodoItemForm());
    appearDOMElement(content, createTodoAddForm(projectName));

    todoFormRender(projectName);
    ButtonsInvoke();
    Buttons.todoSettingsButton();
  }
}
