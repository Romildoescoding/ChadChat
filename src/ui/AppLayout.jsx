import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import Chats from "../features/chats/Chats";

function AppLayout() {
  const { isFetching } = useQuery({ queryKey: ["user"] });
  if (isFetching) return <Spinner />;

  return (
    <div className="bg-dimgray h-screen w-screen">
      <Header />
      <main className=" flex h-[90%] w-screen">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
