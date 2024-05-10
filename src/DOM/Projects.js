import { createProjectItem } from "../Pages/Components/ProjectItem";
import { appearDOMElement } from "../Pages/Functions/DOMAppear";

const content = document.querySelector(".content");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");
const allProjects = document.querySelector('.projects');

export default class Projects {
  static projectSidebarLoader(e) {
    allProjects.innerHTML = ``;
    for (const project of Object.entries(localStorage).reverse()) {
      appearDOMElement(allProjects, createProjectItem(project[0]))
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
    sidebar.addEventListener("click", Projects.projectPageLoader);
  }
}
