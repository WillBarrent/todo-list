import { Buttons } from "../DOMRender/Buttons";
import Todo from "../DOMRender/Todo";

export function todayContent() {
  const header = document.querySelector(".header");
  const content = document.querySelector(".content");

  header.textContent = "Today";

  content.innerHTML = "";
  Todo.todoTodayLoader();
  Buttons.todoSettingsButton();
}
