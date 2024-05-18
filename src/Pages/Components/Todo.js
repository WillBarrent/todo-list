import { format } from "date-fns";
import {
  addTodoItem,
  deleteProjectTodoItem,
  getProjectTodoItems,
  updateTodoItem,
} from "../../Application/Todo";
import { deleteProjectItem, getProjectItem } from "../../Application/Project";
import Todo from "../../DOMRender/Todo";
import ButtonsInvoke, { Buttons } from "../../DOMRender/Buttons";
import { createModal } from "./Modal";
import {
  afterAppearDOMElement,
  appearDOMElement,
  beforeAppearDOMElement,
} from "../Functions/DOMAppear";
import { createTodoAddForm } from "./TodoForm";

function prioritySettingsRender() {
  const priorityMenu = document.querySelector(".priority__settings");
  const priorityTitle = document.querySelector(".priority-text");
  priorityMenu.addEventListener("click", function (e) {
    if (e.target.classList.contains("priority__item")) {
      priorityTitle.textContent = e.target.textContent;
      let buttons = new Buttons();
      buttons.todoClearAnotherButton();
    }
  });
}

function projectSettingsRender() {
  const projectMenu = document.querySelector(
    ".todo__add-task--project-projects"
  );
  const projectTitle = document.querySelector(".todo__add-task--project-text");
  projectMenu.addEventListener("click", function (e) {
    if (e.target.classList.contains("todo__add-task--item")) {
      projectTitle.textContent = e.target.textContent;
      let buttons = new Buttons();
      buttons.todoClearAnotherButton();
    }
  });
}

function todoFormRender(projectName = "All") {
  const addTodo = document.querySelector(".todo__add-task--add-text");
  const nameTodo = document.querySelector(".todo__add-task--name");
  const descriptionTodo = document.querySelector(
    ".todo__add-task--description"
  );
  const duedate = document.querySelector("#date");

  prioritySettingsRender();
  projectSettingsRender();

  addTodo.addEventListener("click", function () {
    try {
      const projectTitle = document.querySelector(
        ".todo__add-task--project-text"
      );
      const priorityTitle = document.querySelector(".priority-text");

      const date = new Date(duedate.value.split("-").join(", "));
      const dateForm = {
        todoItem: format(date, "MMMM dd", "en-US"),
        todoInfo: format(date, "MMMM dd, Yo", "en-US"),
        sort: format(date, "MM/dd/yy"),
      };
      addTodoItem(
        nameTodo.value || "None",
        projectTitle.textContent,
        descriptionTodo.value || "None",
        dateForm,
        priorityTitle.textContent ? priorityTitle.textContent : "None"
      );
      Todo.todoLoaderInvoke(projectName);

      nameTodo.value = "";
      descriptionTodo.value = "";
    } catch (e) {
      console.log(e);
      console.log("ERROR");
    }
  });
}

function todoFormUpdate(project, title, priority) {
  const editTodo = document.querySelector(".edit-form-btn");
  const editForm = editTodo.closest(".edit-form");

  const editFormName = editForm.querySelector(".todo__add-task--name");
  const editFormDescription = editForm.querySelector(
    ".todo__add-task--description"
  );
  const editFormDuedate = editForm.querySelector(".duedate__date");

  prioritySettingsRender();

  editTodo.addEventListener("click", function () {
    const editFormPriority = editForm.querySelector(".priority-text");
    updateTodoItem(
      project,
      title,
      priority,
      editFormName.value,
      editFormDescription.value,
      editFormDuedate.value,
      editFormPriority.textContent
    );
    Todo.todoLoaderInvoke();
  });
}

function deleteAllEditItem() {
  const allEditForm = document.querySelectorAll(".edit-form");

  Array.from(allEditForm).length === 0 ||
    allEditForm.forEach((form) => form.remove());
}

function todoFormUpdateRender() {
  const todoItem = this.closest(".todo__title");
  const todoItemText = todoItem.querySelector(".todo__text").textContent;

  deleteAllEditItem();

  const getTodoItem = getProjectTodoItems(
    todoItem.querySelector(".todo__project-title").textContent
  );

  const currentTodoItem = getTodoItem.find(
    (item) =>
      item.title === todoItemText && item.priority === todoItem.dataset.priority
  );

  afterAppearDOMElement(
    todoItem.closest(".todo__item"),
    createTodoAddForm(currentTodoItem.project, "Edit", "edit-form")
  );

  document.querySelector(".edit-form").classList.remove("hidden");

  todoFormUpdate(
    currentTodoItem.project,
    currentTodoItem.title,
    currentTodoItem.priority
  );

  ButtonsInvoke();
}

function todoFormDeleteRender() {
  const todoItem = this.closest(".todo__title");
  const todoItemText = todoItem.querySelector(".todo__text").textContent;

  const getTodoItem = getProjectTodoItems(
    todoItem.querySelector(".todo__project-title").textContent
  );

  const currentTodoItem = getTodoItem.find(
    (item) =>
      item.title === todoItemText && item.priority === todoItem.dataset.priority
  );

  deleteProjectTodoItem(
    currentTodoItem.project,
    currentTodoItem.title,
    currentTodoItem.priority
  );

  Todo.todoLoaderInvoke();
}

function todoFormInfoRender() {
  const content = document.querySelector(".content");

  const todoItem = this.closest(".todo__title");
  const todoItemText = todoItem.querySelector(".todo__text").textContent;

  const getTodoItem = getProjectTodoItems(
    todoItem.querySelector(".todo__project-title").textContent
  );

  const currentTodoItem = getTodoItem.find(
    (item) =>
      item.title === todoItemText && item.priority === todoItem.dataset.priority
  );

  const modal = createModal(
    currentTodoItem.title,
    currentTodoItem.description,
    currentTodoItem.duedate.todoInfo,
    currentTodoItem.priority,
    currentTodoItem.project
  );

  appearDOMElement(content, modal);

  Buttons.modalContentClose();
}

function completeTodoRender() {
  const todoItems = document.querySelector(".todo__items-list");

  todoItems.addEventListener("click", function (e) {
    if (e.target.classList.contains("todo__title--circle")) {
      Todo.todoIntermediateMethod("Delete", e.target);
    }
  });
}

export {
  todoFormRender,
  todoFormUpdateRender,
  todoFormDeleteRender,
  todoFormInfoRender,
  deleteAllEditItem,
  completeTodoRender,
};
