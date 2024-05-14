export class Buttons {
  static projectsDropdownButton() {
    const projectsTitle = document.querySelector(".projects-title");
    const allProjects = document.querySelector(".projects");
    const img = document.querySelector(".projects-see-all");
    const addProject = document.querySelector(".todo__add-project--btn");
    const addProjectForm = document.querySelector(".add-project");

    projectsTitle.addEventListener("click", function () {
      if (addProjectForm.classList.contains("hidden")) {
        img.innerHTML = !allProjects.classList.contains("hidden")
          ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>'
          : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>';
        addProject.classList.toggle("hidden");
        allProjects.classList.toggle("hidden");
      }
    });
  }

  projectAddButton() {
    const projectButton = document.querySelector(".todo__add-project--btn");
    const projectForm = document.querySelector(".add-project");

    projectButton.addEventListener("click", function () {
      projectButton.classList.add("hidden");
      projectForm.classList.remove("hidden");
    });
  }

  projectAddNewButton() {
    const projectButton = document.querySelector(".add-project__add");
    const projectAddForm = document.querySelector(".todo__add-project--btn");
    const projectForm = document.querySelector(".add-project");

    projectButton.addEventListener("click", function () {
      projectForm.classList.add("hidden");
      projectAddForm.classList.remove("hidden");
    });
  }

  projectCancelButton() {
    const projectButton = document.querySelector(".todo__add-project--btn");
    const cancelButton = document.querySelector(".add-project__cancel");
    const projectForm = document.querySelector(".add-project");

    cancelButton.addEventListener("click", function () {
      projectButton.classList.remove("hidden");
      projectForm.classList.add("hidden");
    });
  }

  projectCancelUpdateButton() {
    const updateForm = document.querySelectorAll('.project-edit-form');
    updateForm.forEach(form => {
      const cancelButton = form.querySelector('.add-project__cancel');
      cancelButton.addEventListener('click', function() {
        form.remove();
      });
    });
  }

  todoAddButton() {
    const todoButton = document.querySelector(".todo__add-task--btn");
    const todoForm = document.querySelector(".todo__add-task");

    todoButton.addEventListener("click", function () {
      todoButton.classList.add("hidden");
      todoForm.classList.remove("hidden");
    });
  }

  todoCancelAddButton() {
    const todoButton = document.querySelector(".todo__add-task--btn");
    const todoForm = document.querySelector(".todo__add-task");
    const cancelButton = document.querySelector(".todo__add-task--cancel-text");

    cancelButton.addEventListener("click", function () {
      todoButton.classList.remove("hidden");
      todoForm.classList.add("hidden");
    });
  }

  todoSettingsButton() {
    const todoSettings = document.querySelector(".todo__settings");
    const todoSettingsForm = document.querySelector(".todo__settings-all");

    todoSettings?.addEventListener("click", () =>
      todoSettingsForm.classList.toggle("hidden")
    );
  }

  todoClearAnotherButton(settings) {
    const duedate = document.querySelector(".duedate__settings");
    const priority = document.querySelector(".priority__settings");
    const project = document.querySelector(".todo__add-task--project-projects");

    duedate.classList.add("hidden");
    priority.classList.add("hidden");
    project.classList.add("hidden");

    settings?.classList.remove("hidden");
  }

  todoDuedateButton() {
    const duedate = document.querySelector(".duedate__settings");
    const duedateButton = document.querySelector(".duedate-title");

    duedateButton.addEventListener("click", () => {
      duedate.classList.contains("hidden")
        ? this.todoClearAnotherButton(duedate)
        : duedate.classList.add("hidden");
    });
  }

  todoPriorityButton() {
    const priority = document.querySelector(".priority__settings");
    const priorityButton = document.querySelector(".priority-title");

    priorityButton.addEventListener("click", () => {
      priority.classList.contains("hidden")
        ? this.todoClearAnotherButton(priority)
        : priority.classList.add("hidden");
    });
  }

  todoChooseProjectButton() {
    const project = document.querySelector(".todo__add-task--project-projects");
    const projectButton = document.querySelector(
      ".todo__add-task--project-title"
    );

    projectButton.addEventListener("click", () => {
      project.classList.contains("hidden")
        ? this.todoClearAnotherButton(project)
        : project.classList.add("hidden");
    });
  }
}

export default function ButtonsInvoke() {
  const Button = new Buttons();

  Button.todoAddButton();
  Button.todoCancelAddButton();
  Button.projectAddButton();
  Button.projectAddNewButton();
  Button.projectCancelButton();
  Button.todoSettingsButton();
  Button.todoDuedateButton();
  Button.todoPriorityButton();
  Button.todoChooseProjectButton();
}
