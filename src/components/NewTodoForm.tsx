import { newTodo } from "@/utils/actions";
import React from "react";

type Props = {};

const NewTodoForm = (props: Props) => {
  return (
    <div>
      <form action={newTodo}>
        <input
          type="text"
          name="content"
          className="border-2 border-black border-opacity-20"
        />
        <button type="submit">new todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
