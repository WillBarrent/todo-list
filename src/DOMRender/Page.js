import { allTodoContent } from "../Pages/AllTodo";
import { todayContent } from "../Pages/Today";
import { nextWeekContent } from "../Pages/NextWeek";
import ButtonsInvoke, { Buttons } from "./Buttons";

const sidebar = document.querySelector(".sidebar");

const sidebarItems = ["All", "Today", "Next 7 day"];
const sidebarFunctions = [allTodoContent, todayContent, nextWeekContent];

export default class Page {
  static defaultPage() {
    sidebarFunctions[0]();
  }

  static render() {
    Page.defaultPage();
    sidebar.addEventListener("click", function (e) {
      if (e.target.classList.contains("sidebar-text")) {
        let content = e.target.textContent;
        sidebarItems.forEach((item, index) => {
          if (item === content) {
            sidebarFunctions[index]();
          }
        });
      }
    });
  }
}
