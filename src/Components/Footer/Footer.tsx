import { Filters } from "../TasksFilter/TasksFilter";
import { TFooter, TFilter } from "../../TypeScript/TypeScript";

export const Footer = ({
  clearCompletedTodos,
  countCompletedTodo,
}: TFooter) => {
  return (
    <footer className="footer">
      <span className="todo-count">{countCompletedTodo} items left</span>
      <Filters />
      <button className="clear-completed" onClick={clearCompletedTodos}>
        Clear completed
      </button>
    </footer>
  );
};
