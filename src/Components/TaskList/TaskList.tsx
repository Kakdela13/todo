import { Task } from "../Task/Task";
import { formatDistanceToNowStrict } from "date-fns";
import { TTodo, TList } from "../../TypeScript/TypeScript";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
