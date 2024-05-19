import { getAllProjectItems, getProjectItem } from "../Application/Project";
import {
  getNextWeekItems,
  getProjectTodoItems,
  getTodayTodoItems,
} from "../Application/Todo";
import { completeTodoRender, deleteAllEditItem, todoFormDeleteRender, todoFormInfoRender, todoFormRender, todoFormUpdateRender } from "../Pages/Components/Todo";
import { createTodoItem } from "../Pages/Components/TodoItem";
import {
  appearDOMElement,
  beforeAppearDOMElement,
  createDOMElement,
} from "../Pages/Functions/DOMAppear";
import { Buttons } from "./Buttons";

export default class Todo {
  static todoLoader(projectName = "All") {
    const allItems =
      projectName === "All"
        ? getAllProjectItems()
            .map((item) => JSON.parse(item[1]).todoItems.reverse())
            .reverse()
        : [getProjectItem(projectName).todoItems.reverse()];

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

    Buttons.todoSettingsButton();
    deleteAllEditItem();
  }

  static todoTodayLoader() {
    Todo.todoItemsClear();
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
    Todo.todoItemsClear();
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

  static projectTodoItems(projectName) {
    const content = document.querySelector(".content");
    const listOfTodo = createDOMElement("div", "todo__items-list");
    beforeAppearDOMElement(content, listOfTodo);

    const todoItems = getProjectTodoItems(projectName);
    todoItems.forEach((item) => {
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

  static todoLoaderInvoke(projectName = "All") {
    Todo.todoItemsClear();
    Todo.todoLoader(projectName);
  }

  static todoIntermediateMethod(fnName, e) {
    const formMethodsName = ["Edit", "Delete", "Info"];
    const formMethods = [
      todoFormUpdateRender.bind(e),
      todoFormDeleteRender.bind(e),
      todoFormInfoRender.bind(e)
    ];

    formMethodsName.forEach((methodName, methodIndex) =>
      methodName === fnName ? formMethods[methodIndex]() : ""
    );
  }

  static todoUpdatePageRender(headerName, projectName) {
    const headerText = ["All To-Do Tasks", "Today", "Next 7 Day"];
    const updateFunction = [
      Todo.todoLoaderInvoke,
      Todo.todoTodayLoader,
      Todo.todoNextWeekLoader,
    ];
  
    let isProjectPage = true;
  
    headerText.forEach((name, index) => {
      if (name.toLowerCase() === headerName.toLowerCase()) {
        updateFunction[index]();
        isProjectPage = false;
      }
    });
  
    if (isProjectPage) {
      Todo.todoLoaderInvoke(projectName);
    }
  }
}
