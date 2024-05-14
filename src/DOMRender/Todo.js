import { getAllProjectItems } from "../Application/Project";
import { getNextWeekItems, getTodayTodoItems } from "../Application/Todo";
import { todoFormRender } from "../Pages/Components/Todo";
import { createTodoItem } from "../Pages/Components/TodoItem";
import {
  appearDOMElement,
  beforeAppearDOMElement,
  createDOMElement,
} from "../Pages/Functions/DOMAppear";

export default class Todo {
  static todoLoader() {
    const allItems = getAllProjectItems()
      .map((item) => JSON.parse(item[1]).todoItems.reverse())
      .reverse();
    const content = document.querySelector(".content");
    const listOfTodo = createDOMElement("div", "todo__items-list");
    beforeAppearDOMElement(content, listOfTodo);
    allItems.forEach((project) => {
      project.forEach((item) => {
        const todoItem = createTodoItem(
          item.title,
          item.duedate.todoItem,
          item.priority,
          item.project
        );
        beforeAppearDOMElement(listOfTodo, todoItem);
      });
    });
  }

  static todoTodayLoader() {
    const content = document.querySelector(".content");
    const listOfTodo = createDOMElement("div", "todo__items-list");
    beforeAppearDOMElement(content, listOfTodo);

    const todayTodoItems = getTodayTodoItems();
    todayTodoItems.forEach((item) => {
      const todoItem = createTodoItem(
        item.title,
        item.duedate.todoItem,
        item.priority,
        item.project
      );
      beforeAppearDOMElement(listOfTodo, todoItem);
    });
  }

  static todoNextWeekLoader() {
    const content = document.querySelector(".content");
    const listOfTodo = createDOMElement("div", "todo__items-list");
    beforeAppearDOMElement(content, listOfTodo);

    const nextWeekTodoItems = getNextWeekItems();
    nextWeekTodoItems.forEach((item) => {
      const todoItem = createTodoItem(
        item.title,
        item.duedate.todoItem,
        item.priority,
        item.project
      );
      beforeAppearDOMElement(listOfTodo, todoItem);
    });
  }

  static todoItemsClear() {
    const items = document.querySelectorAll(".todo__item");

    items.forEach((item) => item.remove());
  }

  static todoLoaderInvoke() {
    Todo.todoItemsClear();
    Todo.todoLoader();
  }
}
