import { format } from "date-fns";
import { addTodoItem } from "../../Application/Todo";
import { getProjectItem } from "../../Application/Project";
import Todo from "../../DOMRender/Todo";

function todoFormRender() {
  const addTodo = document.querySelector(".todo__add-task--add-text");
  const nameTodo = document.querySelector(".todo__add-task--name");
  const descriptionTodo = document.querySelector(
    ".todo__add-task--description"
  );
  const duedate = document.querySelector('#date');

  addTodo.addEventListener('click', function() {
    try {
        const date = new Date(duedate.value.split('-').join(', '));
        const dateForm = {
            todoItem: format(date, "MMMM dd" , "en-US"),
            todoInfo: format(date, "MMMM dd, Yo" , "en-US"),
            sort: format(date, "MM/dd/yy"),
        };
        addTodoItem(nameTodo.value, 'Project', descriptionTodo.value, dateForm, 'None');
        Todo.todoLoaderInvoke();

        nameTodo.value = '';
        descriptionTodo.value = '';
      } catch (e) {
        console.log(e);
        console.log("ERROR")
    }
  })
}

function todoFormUpdateRender() {}

export { todoFormRender };
