import { format } from "date-fns";
import { getAllProjectItems, getProjectItem } from "./Project";

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

function getTodayTodoItems() {
  const allTodayItems = [];

  const todayDate = format((new Date()), "MM/dd/yy");
  const allItems = getAllProjectItems();
  allItems.forEach((item) => {
    JSON.parse(item[1]).todoItems.forEach(item => {
      if (item.duedate.sort === todayDate) {
        allTodayItems.push(item);
      }
    }); 
  });

  return allTodayItems;
}

function getNextWeekItems() {
  const allNextWeekItems = [];
  const todayDate = format((new Date()), "MM/dd/yy").split('/');
  const allItems = getAllProjectItems();
  allItems.forEach((item) => {
    JSON.parse(item[1]).todoItems.forEach(item => {
      const date = item.duedate.sort.split('/');
      if (date[1] - todayDate[1] <= 7 && date[0] === todayDate[0] && date[2] === todayDate[2]) {
        allNextWeekItems.push(item);
      }
    }); 
  });

  return allNextWeekItems;
}

function getProjectTodoItems(projectName) {
  const allItems = getAllProjectItems();
  const projectTodos = [];

  allItems.forEach(item => {
    if (JSON.parse(item[1]).projectName == projectName) {
      JSON.parse(item[1]).todoItems.forEach(todo => {
        projectTodos.push(todo);
      })
    }
  });

  return projectTodos;
}

export { addTodoItem, addDefaultTodoItem, getTodayTodoItems, getNextWeekItems, getProjectTodoItems };
