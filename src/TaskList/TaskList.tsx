import { Task } from "../Task/Task";
import { formatDistanceToNowStrict } from "date-fns";

type TTodo = {
  id: Date;
  title: string;
  edit: boolean;
  completed: boolean;
  createdAt: Date;
};

type TList = {
  todoData: TTodo[];
  deleteTodo: (id: Date) => void;
  onCheckboxClick: (id: Date) => void;
  setEditMode: (id: Date) => void;
  updateTitle: (id: Date, newTitle: string) => void;
};
export const TaskList = ({
  todoData,
  deleteTodo,
  onCheckboxClick,
  setEditMode,
  updateTitle,
}: TList) => {
  return (
    <ul className="todo-list">
      {todoData.map((taskData: TTodo) => {
        console.log(taskData);
        return (
          <Task
            key={taskData.id.toString()}
            taskData={taskData}
            deleteTodo={deleteTodo}
            onCheckboxClick={onCheckboxClick}
            setEditMode={setEditMode}
            updateTitle={updateTitle}
          />
        );
      })}
    </ul>
  );
};
