function addDefaultProjectItem() {
  localStorage.setItem("Default", JSON.stringify({
    projectName: "Default",
    todoItems: [],
  }));
}

function addProjectItem(title = "None") {
  if (
    title.length <= 0 ||
    !(typeof title == "string") ||
    localStorage.getItem(title)
  ) {
    console.log("Item already exist or you`ve created empty project title");
    throw new Error();
  }

  title = title.split(" ")[0];
  localStorage.setItem(
    title,
    JSON.stringify({
      projectName: title,
      todoItems: [],
    })
  );
}

function getProjectItem(title) {
  const projectItem = JSON.parse(localStorage.getItem(title));
  return projectItem;
}

export { addProjectItem, addDefaultProjectItem, getProjectItem };
