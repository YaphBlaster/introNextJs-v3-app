import { Todo as TodoInterface } from "@prisma/client";
import React from "react";
import Todo from "./Todo";

type Props = {
  todos: TodoInterface[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
