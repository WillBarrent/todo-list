import AllTodoPage from "../Pages/AllTodo";
import TodayPage from "../Pages/Today";
import NextWeekPage from "../Pages/NextWeek";

const content = document.querySelector(".content");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");

const sidebarItems = ["All", "Today", "Next 7 day"];
const sidebarContents = [
  AllTodoPage(),
  TodayPage(),
  NextWeekPage(),
];

export default class Page {
  static defaultPage() {
    header.textContent = sidebarContents[0][0];
    content.innerHTML = sidebarContents[0][1];
  }

  static pageLoader(e) {
    sidebarItems.forEach((item, index) => {
      if (e.target.textContent === item) {
        header.textContent = sidebarContents[index][0];
        content.innerHTML = sidebarContents[index][1];
      }
    });
  }

  static pageLoaderInvoke() {
    Page.defaultPage();
    sidebar.addEventListener('click', Page.pageLoader);
  }
}
