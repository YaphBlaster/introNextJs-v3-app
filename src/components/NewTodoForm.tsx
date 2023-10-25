"use client";
import React, { useState } from "react";

type Props = {};

const NewTodoForm = (props: Props) => {
  const [state, setState] = useState("");

  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};

export default NewTodoForm;
