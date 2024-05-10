import { createTodoItemForm, createTodoAddForm } from "./Components/TodoForm";
import { appearDOMElement } from "./Functions/DOMAppear";

const header = 'All To-Do Tasks';

// Rebuild it with JavaScript Methods
export function pageContent() {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');

    header.textContent = 'All To-Do Tasks';

    appearDOMElement(content, createTodoItemForm());
    appearDOMElement(content, createTodoAddForm());
}