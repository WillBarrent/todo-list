import { deleteProjectItem } from "../Application/Project";
import { projectFormUpdateRender } from "../Pages/Components/Project";
import { createProjectItem } from "../Pages/Components/ProjectItem";
import { appearDOMElement } from "../Pages/Functions/DOMAppear";
import { Buttons } from "./Buttons";

const content = document.querySelector(".content");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");
const allProjects = document.querySelector(".projects");

export default class Projects {
  static projectSidebarLoader(e) {
    allProjects.innerHTML = ``;
    for (const project of Object.entries(localStorage).reverse()) {
      appearDOMElement(allProjects, createProjectItem(project[0]));
    }
  }

  static projectSidebarDelete() {
    const deleteProject = document.querySelectorAll(".project-settings-delete");
    deleteProject.forEach((project) => {
      project.addEventListener("click", function (e) {
        const projectName = e.target
          .closest(".project")
          .querySelector(".project-name").textContent;
        deleteProjectItem(projectName);
        Projects.projectLoaderInvoke();
      });
    });
  }

  static projectSidebarRename() {
    const renameProject = document.querySelectorAll(".project-settings-rename");
    renameProject.forEach((project) => {
      project.addEventListener("click", function (e) {
        const projectName = e.target.closest(".project");
        if (
          !projectName.nextElementSibling?.classList.contains(
            "project-edit-form"
          ) &&
          !document.querySelector(".project-edit-form")
        )
          projectFormUpdateRender(projectName);

        const Button = new Buttons();
        Button.projectCancelUpdateButton();
      });
    });
  }

  static projectPageUpdate(newTitle) {
    if (header.textContent.split(':').find(subtext => subtext === 'Project')) {
      header.textContent = "Project: " + newTitle;
      content.innerHTML = "Your To-Do Items Will Be Here";
    }
  }

  static projectPageLoader(e) {
    const project = e.target.classList;
    if (project.contains("project-name")) {
      header.textContent = "Project: " + e.target.textContent;
      content.innerHTML = "Your To-Do Items Will Be Here";
    }
  }

  static projectLoaderInvoke() {
    this.projectSidebarLoader();

    Projects.projectSidebarDelete();
    Projects.projectSidebarRename();

    sidebar.addEventListener("click", Projects.projectPageLoader);
  }
}
