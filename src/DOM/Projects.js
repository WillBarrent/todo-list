const content = document.querySelector(".content");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");

export default class Projects {
  static projectLoader(e) {
    const project = e.target.classList;
    if (project.contains("project-name")) {
      header.textContent = "Project: " + e.target.textContent;
      content.innerHTML = "there will be content";
    }
  }

  static projectLoaderInvoke() {
    sidebar.addEventListener("click", Projects.projectLoader);
  }
}
