import "./App.css";

import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { TaskList } from "./Components/TaskList/TaskList";
import { Footer } from "./Components/Footer/Footer";
import { TTodo, TFilter } from "./TypeScript/TypeScript";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { setFilter } from "./Components/TasksFilter/filtersSlice";

export const App = () => {
  const [todoData, setTodoData] = useState<TTodo[]>([]);

  const filter = useSelector((state: RootState) => state.filters.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://backend-platform-9cer.onrender.com/todos/`,
        );

        const data = await res.json();

        setTodoData(data);
        console.log(data);
      } catch (error) {
        console.log("Ошибка:", error);
      }
    };
    fetchData();
  }, []);

  const sendTodo = async (todo: TTodo) => {
    const res = await fetch(
      "https://backend-platform-9cer.onrender.com/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(todo),
      },
    );

    const data = await res.json();

    console.log("res", data);
  };

  const deleteTodoSend = async (id: number) => {
    const res = await fetch(
      `https://backend-platform-9cer.onrender.com/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      },
    );

    const data = await res.json();

    console.log("res", data);
  };

  const addTodo = (value: string) => {
    sendTodo({
      id: Date.now(),
      title: value,
      edit: false,
      completed: false,
      createdAt: new Date(),
      author: "Света",
    });
    setTodoData([
      {
        id: Date.now(),
        title: value,
        edit: false,
        completed: false,
        createdAt: new Date(),
        author: "Света",
      },
      ...todoData,
    ]);
  };

  const deleteTodo = (id: number) => {
    deleteTodoSend(id);
    const result = todoData.filter((el) => {
      return el.id !== id;
    });

    setTodoData(result);
  };

  const onCheckboxClick = (id: number) => {
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
  const setEditMode = (id: number) => {
    const butEditing = todoData.map((todo) =>
      todo.id === id ? { ...todo, edit: !todo.edit } : todo,
    );
    setTodoData(butEditing);
  };

  const updateTitle = (id: number, newTitle: string) => {
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
        />
      </section>
    </section>
  );
};
export default App;
