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
    content.textContent = ``;
    allItems.forEach(project => {
        project.forEach(item => {
            const todoItem = createTodoItem(item.title, item.duedate.todoItem, item.priority, item.project);
            beforeAppearDOMElement(content, todoItem);
        })
    });
  }

  static todoLoaderInvoke() {
    Todo.todoLoader();
  }
}
