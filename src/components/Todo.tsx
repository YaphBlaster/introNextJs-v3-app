"use client";
import { completeTodo } from "@/utils/actions";
import { Todo } from "@prisma/client";
import React, { useTransition } from "react";

type Props = {
  todo: Todo;
};
const Todo = ({ todo }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? "line-through text-gray-900" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
