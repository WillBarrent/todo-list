import AllTodoPage from "../Pages/AllTodo";
import TodayPage from "../Pages/Today";
import NextWeekPage from "../Pages/NextWeek";
import NotesPage from "../Pages/Notes";

const content = document.querySelector(".content");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");

const sidebarItems = ["All", "Today", "Next 7 day", "Notes"];
const sidebarContents = [
  AllTodoPage(),
  TodayPage(),
  NextWeekPage(),
  NotesPage(),
];

export default class Page {
  static defaultPage() {
    header.textContent = sidebarContents[0][0];
    content.innerHTML = sidebarContents[0][1];
  }

  static PageLoader(e) {
    sidebarItems.forEach((item, index) => {
      if (e.target.textContent === item) {
        header.textContent = sidebarContents[index][0];
        content.innerHTML = sidebarContents[index][1];
      }
    });
  }

  static PageLoaderInvoke() {
    Page.defaultPage();
    sidebar.addEventListener('click', Page.PageLoader);
  }
}
