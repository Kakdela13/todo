import { FC, useState } from "react";

type TProps = {
  addTodo: (value: string) => void;
};
]
export const Header: FC<TProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (value.trim() !== "") {
              addTodo(value.trim());
              setValue("");
            }
          }
        }}
      />
    </header>
  );
};
