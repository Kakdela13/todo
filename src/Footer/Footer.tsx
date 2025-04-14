import { Filters } from "../TasksFilter/TasksFilter";

type TFooter = {
  clearCompletedTodos: () => void;
  countCompletedTodo: number;
  setFilter: (filter: TFilter) => void;
  filter: TFilter;
};
type TFilter = "all" | "active" | "completed";

export const Footer = ({
  clearCompletedTodos,
  countCompletedTodo,
  setFilter,
  filter,
}: TFooter) => {
  return (
    <footer className="footer">
      <span className="todo-count">{countCompletedTodo} items left</span>
      <Filters setFilter={setFilter} filter={filter} />
      <button className="clear-completed" onClick={clearCompletedTodos}>
        Clear completed
      </button>
    </footer>
  );
};
