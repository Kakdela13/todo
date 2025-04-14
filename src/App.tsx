import "./App.css";

import React, { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import { TaskList } from "./TaskList/TaskList";
import { Footer } from "./Footer/Footer";
import { formatDistanceToNowStrict } from "date-fns";

type TTodo = {
  id: Date;
  title: string;
  edit: boolean;
  completed: boolean;
  createdAt: Date;
};
type TFilter = "all" | "active" | "completed";

export const App = () => {
  const [todoData, setTodoData] = useState<TTodo[]>([]);
  const [filter, setFilter] = useState<TFilter>("all");

  const addTodo = (value: string) => {
    setTodoData([
      ...todoData,
      {
        id: new Date(),
        title: value,
        edit: false,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  const deleteTodo = (id: Date) => {
    const result = todoData.filter((el) => {
      return el.id !== id;
    });

    setTodoData(result);
  };

  const onCheckboxClick = (id: Date) => {
    const completedTodos = todoData.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodoData(completedTodos);
  };
  const clearCompletedTodos = () => {
    const clearTodos = todoData.filter((todo) => !todo.completed);
    setTodoData(clearTodos);
  };
  const setEditMode = (id: Date) => {
    const butEditing = todoData.map((todo) =>
      todo.id === id ? { ...todo, edit: !todo.edit } : todo,
    );
    setTodoData(butEditing);
  };

  const updateTitle = (id: Date, newTitle: string) => {
    const titleNew = todoData.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle, edit: false } : todo,
    );
    setTodoData(titleNew);
  };

  const countCompletedTodo = () => {
    return todoData.filter((todo) => !todo.completed).length;
  };
  console.log("filter", filter);
  const filteredTodos = todoData.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <section className="main">
        <TaskList
          todoData={filteredTodos}
          deleteTodo={deleteTodo}
          onCheckboxClick={onCheckboxClick}
          setEditMode={setEditMode}
          updateTitle={updateTitle}
        />
        <Footer
          clearCompletedTodos={clearCompletedTodos}
          countCompletedTodo={countCompletedTodo()}
          setFilter={setFilter}
          filter={filter}
        />
      </section>
    </section>
  );
};
