import { format } from "date-fns";
import { getProjectItem } from "./Project";

function addDefaultTodoItem() {
  const date = new Date();
  addTodoItem(
    "This is To-Do Application.",
    "Default",
    "La-la-la.",
    {
      todoItem: format(date, "MMMM dd", "en-US"),
      todoInfo: format(date, "MMMM dd, Yo", "en-US"),
      sort: format(date, "MM/dd/yy"),
    },
    "Medium"
  );
  addTodoItem(
    "I appreciate that you use this application.",
    "Default",
    "Have a fun!",
    {
      todoItem: format(date, "MMMM dd", "en-US"),
      todoInfo: format(date, "MMMM dd, Yo", "en-US"),
      sort: format(date, "MM/dd/yy"),
    },
    "High"
  );
}

function addTodoItem(
  title,
  project = "Default",
  description = "None",
  duedate = "None",
  priority = "none"
) {
  let projectTodos = [...JSON.parse(localStorage.getItem(project)).todoItems];
  projectTodos.push({
    title,
    project,
    description,
    duedate,
    priority: priority.toLowerCase(),
  });

  localStorage.setItem(
    project,
    JSON.stringify({
      projectName: project,
      todoItems: projectTodos,
    })
  );
}

export { addTodoItem, addDefaultTodoItem };
