import Image from "next/image";
import NewTodoForm from "@/components/NewTodoForm";

export default async function Home() {
  return (
    <div>
      <NewTodoForm />
    </div>
  );
}
