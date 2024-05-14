import { getNextWeekItems } from "../Application/Todo";
import ButtonsInvoke, { Buttons } from "../DOMRender/Buttons";
import Todo from "../DOMRender/Todo";

export function nextWeekContent() {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');

    header.textContent = 'Next 7 Day';
    content.innerHTML = ``;

    Todo.todoNextWeekLoader();
}