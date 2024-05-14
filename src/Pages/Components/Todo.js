import { format } from "date-fns";
import { addTodoItem } from "../../Application/Todo";
import { getProjectItem } from "../../Application/Project";
import Todo from "../../DOMRender/Todo";
import { Buttons } from "../../DOMRender/Buttons";

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

function todoFormRender() {
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

      console.log(priorityTitle.textContent)

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
        priorityTitle.textContent ? priorityTitle.textContent : "None",
      );
      Todo.todoLoaderInvoke();

      nameTodo.value = "";
      descriptionTodo.value = "";
    } catch (e) {
      console.log(e);
      console.log("ERROR");
    }
  });
}

function todoFormUpdateRender() {}

export { todoFormRender };
