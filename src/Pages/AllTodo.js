import ButtonsInvoke, { Buttons } from "../DOMRender/Buttons";
import Projects from "../DOMRender/Projects";
import Todo from "../DOMRender/Todo";
import { completeTodoRender, todoFormRender } from "./Components/Todo";
import { createTodoItemForm, createTodoAddForm } from "./Components/TodoForm";
import { appearDOMElement } from "./Functions/DOMAppear";

export function allTodoContent() {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');

    header.textContent = 'All To-Do Tasks';

    content.innerHTML = '';

    Todo.todoLoaderInvoke();

    appearDOMElement(content, createTodoItemForm());
    appearDOMElement(content, createTodoAddForm());

    todoFormRender();
    ButtonsInvoke();
    
    Projects.projectDropdownLoader();
}