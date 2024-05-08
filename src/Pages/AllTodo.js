const header = 'All To-Do Tasks';

const pageContent = `
        <form action="" class="content__form">
          <div class="todo__item">
            <input type="checkbox" class="todo__checkbox" name="todo-check">
            <label class="todo__title" id="todo-check" data-priority="none">
              <span class="todo__text">ToDo Title</span>
              <span class="todo__settings"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg></span>
              <span class="todo__duedate">Today 10:00 AM</span>
              <span class="todo__project-name">
                <span class="todo__project-img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg></span>
                <span class="todo__project-title">Work</span>
              </span>
            </label>
          </div>
          <div class="todo__add-task--btn">
            <div class="todo__add-task--icon">+</div>
            <div class="todo__add-task--title">Add task</div>
          </div>
        </form>

        <form action="" class="todo__add-task hidden">
          <input type="text" class="todo__add-task--name" placeholder="Task name">
          <input type="text" class="todo__add-task--description" placeholder="Description">
          <div class="todo__add-task--settings">
            <div class="duedate">
              <div class="duedate-title">
                <span class="duedate--img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" /></svg></span>
                <span class="duedate--text">Due Date</span>
              </div>

              <div class="duedate__settings hidden">
                <div class="duedate__item">Today</div>
                <div class="duedate__item">Tomorrow</div>
                <div class="duedate__item">Next Week</div>
                <div class="duedate__item">
                  <label for="date" class="dudate__label">Custom:</label>
                <input type="date" id="date" class="duedate__date" value="2125-01-01"/>
                </div>
              </div>
            </div>
            <div class="priority">
              <div class="priority-title">
                <span class="priority--img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,19H22V17H14V19M14,13.5H22V11.5H14V13.5M14,8H22V6H14V8M2,12.5C2,8.92 4.92,6 8.5,6H9V4L12,7L9,10V8H8.5C6,8 4,10 4,12.5C4,15 6,17 8.5,17H12V19H8.5C4.92,19 2,16.08 2,12.5Z" /></svg></span>
                <span class="priority--text">Priority</span>
              </div>
              <div class="priority__settings hidden">
                <div class="priority__item">
                  <span class="priority__circle low" data-priority-set="low"></span>
                  <span class="priority__title">Low</span>
                </div>
                <div class="priority__item">
                  <span class="priority__circle medium" data-priority-set="medium"></span>
                  <span class="priority__title">Medium</span>
                </div>
                <div class="priority__item">
                  <span class="priority__circle high" data-priority-set="high"></span>
                  <span class="priority__title">High</span>
                </div>
                <div class="priority__item">
                  <span class="priority__circle none" data-priority-set="none"></span>
                  <span class="priority__title">None</span>
                </div>
              </div>
            </div>
          </div>

          <div class="todo__add-task--add">
            <div class="todo__add-task--project">
              <div class="todo__add-task--project-title">
                <span class="todo__add-task--project-img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg></span>
                <span class="todo__add-task--project-text">Default</span>
              </div>
              <div class="todo__add-task--project-projects hidden">
                <div class="todo__add-task--item">Title</div>
                <div class="todo__add-task--item">Title</div>
                <div class="todo__add-task--item">Title</div>
              </div>
            </div>

            <div class="todo__add-task--cancel-text">Cancel</div>
            <div class="todo__add-task--add-text">Add</div>
          </div>

        </form>
`;

export default function AllTodoPage() {
    return [header, pageContent];
}