import { getAllProjectItems } from "../Application/Project";
import { createTodoItem } from "../Pages/Components/TodoItem";
import {
  appearDOMElement,
  beforeAppearDOMElement,
  createDOMElement,
} from "../Pages/Functions/DOMAppear";


export default class Todo {
  static todoLoader() {
    const allItems = getAllProjectItems().map(
      (item) => JSON.parse(item[1]).todoItems.reverse()
    ).reverse();
    const content = document.querySelector('.content');
    const listOfTodo = createDOMElement('div', 'todo__items-list');
    beforeAppearDOMElement(content, listOfTodo);
    allItems.forEach(project => {
        project.forEach(item => {
            const todoItem = createTodoItem(item.title, item.duedate.todoItem, item.priority, item.project);
            beforeAppearDOMElement(listOfTodo, todoItem);
        })
    });
  }

  static todoItemsClear() {
    const items = document.querySelectorAll('.todo__item');

    items.forEach(item => item.remove());
  }

  static todoLoaderInvoke() {
    Todo.todoItemsClear();
    Todo.todoLoader();
  }
}
