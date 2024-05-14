import ButtonsInvoke, { Buttons } from "../DOMRender/Buttons";
import Todo from "../DOMRender/Todo";

export function todayContent() {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');

    content.innerHTML = '';
    Todo.todoTodayLoader();

    header.textContent = 'Today';
}