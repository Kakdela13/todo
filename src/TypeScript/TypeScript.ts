export type TTodo = {
  id: number;
  title: string;
  edit: boolean;
  completed: boolean;
  createdAt: Date;
  author: string;
};
export type TFilter = "all" | "active" | "completed";

export type TList = {
  todoData: TTodo[];
  deleteTodo: (id: number) => void;
  onCheckboxClick: (id: number) => void;
  setEditMode: (id: number) => void;
  updateTitle: (id: number, newTitle: string) => void;
};

export type TTask = {
  taskData: TTodo;
  deleteTodo: (id: number) => void;
  onCheckboxClick: (id: number) => void;
  setEditMode: (id: number) => void;
  updateTitle: (id: number, newTitle: string) => void;
};

export type TFilters = {
  setFilter: (filter: TFilter) => void;
  filter: TFilter;
};

export type TProps = {
  addTodo: (value: string) => void;
};

export type TFooter = {
  clearCompletedTodos: () => void;
  countCompletedTodo: number;
};
