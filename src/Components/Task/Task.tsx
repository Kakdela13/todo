import { formatDistanceToNowStrict } from "date-fns";
import React, { useState, useEffect } from "react";
import { TTodo, TTask } from "../../TypeScript/TypeScript";

export const Task = ({
  taskData,
  deleteTodo,
  onCheckboxClick,
  setEditMode,
  updateTitle,
}: TTask) => {
  const [newTitle, setNewTitle] = useState(taskData.title);

  const editTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const editKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") updateTitle(taskData.id, newTitle);
    else if (e.key === "Escape") setEditMode(taskData.id);
  };

  return (
    <li
      className={`${
        taskData.completed ? "completed" : taskData.edit ? "editing" : "view"
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={taskData.completed}
          onChange={() => {
            onCheckboxClick(taskData.id);
          }}
        />
        <label>
          <span
            className="description"
            onClick={() => onCheckboxClick(taskData.id)}
          >
            {taskData.title}
          </span>
          <span className="created"> created {}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => setEditMode(taskData.id)}
        ></button>

        <button
          className="icon icon-destroy"
          onClick={() => {
            deleteTodo(taskData.id);
          }}
        ></button>
      </div>
      {taskData.edit && (
        <input
          type="text"
          className="edit"
          value={newTitle}
          onChange={editTask}
          onKeyDown={editKey}
        />
      )}
    </li>
  );
};

// {`${setFilter === "all" ? "selected" : ""}`}

// <li className="editing">
//   <div className="view">
//     <input className="toggle" type="checkbox" />
//     <label>
//       <span className="description">Editing task</span>
//       <span className="created">created 5 minutes ago</span>
//     </label>
//     <button className="icon icon-edit"></button>
//     <button className="icon icon-destroy"></button>
//   </div>
//   <input type="text" className="edit" value="Editing task" />
// </li>;
// <li>
//     <div className="view">
//         <input className="toggle" type="checkbox"/>
//         <label>
//             <span className="description">Active task</span>
//             <span className="created">created 5 minutes ago</span>
//         </label>
//         <button className="icon icon-edit"></button>
//         <button className="icon icon-destroy"></button>
//     </div>
// </li>
