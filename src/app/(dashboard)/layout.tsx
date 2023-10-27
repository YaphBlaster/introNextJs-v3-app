import NewTodoForm from "@/components/NewTodoForm";
import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
