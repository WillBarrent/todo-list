function addDefaultProjectItem() {
  localStorage.setItem("Default", JSON.stringify({
    projectName: "Default",
    todoItems: [],
  }));
}

function addProjectItem(title = "None") {
  title = title.split(" ")[0];
  if (
    title.length <= 0 ||
    !(typeof title == "string") ||
    localStorage.getItem(title)
  ) {
    console.log("Item already exist or you`ve created empty project title");
    throw new Error();
  }
  localStorage.setItem(
    title,
    JSON.stringify({
      projectName: title,
      todoItems: [],
    })
  );
}

function updateProjectItem(newTitle, title) {
  if (localStorage.getItem(newTitle) || newTitle.length <= 0 && newTitle.toLowerCase() === 'default') {
    console.log("This name of project already exist or you`ve named it with empty field")
    console.log("Remember that you can not create project named as Default")
    throw new Error();
  };

  const projectTodos = [...JSON.parse(localStorage.getItem(title)).todoItems];
  deleteProjectItem(title);
  localStorage.setItem(
    newTitle,
    JSON.stringify({
      projectName: newTitle,
      todoItems: projectTodos,
    })
  );
}

function deleteProjectItem(title) {
  localStorage.removeItem(title);
}

function getProjectItem(title) {
  const projectItem = JSON.parse(localStorage.getItem(title));
  return projectItem;
}

export { addProjectItem, deleteProjectItem, updateProjectItem, addDefaultProjectItem, getProjectItem };
