"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

export const newTodo = async (formData: FormData) => {
  const content = formData.get("content")?.toString();
  if (!content) return;
  //create new todo in the DB
  const todo = await db.todo.create({
    data: {
      content,
    },
  });
  revalidatePath("/todos");
};

export const completeTodo = async (id: string) => {
  // access the DB Todo table and update the record that has a matching ID with an updated completed value
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};
