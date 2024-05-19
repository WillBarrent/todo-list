import { Buttons } from "../DOMRender/Buttons";
import Todo from "../DOMRender/Todo";
import { createTodoAddForm, createTodoItemForm } from "./Components/TodoForm";
import { appearDOMElement } from "./Functions/DOMAppear";

export function nextWeekContent() {
  const header = document.querySelector(".header");
  const content = document.querySelector(".content");

  header.textContent = "Next 7 Day";
  content.innerHTML = ``;

  appearDOMElement(content, createTodoItemForm());
  appearDOMElement(content, createTodoAddForm());

  Todo.todoNextWeekLoader();
  Buttons.todoSettingsButton();
}
