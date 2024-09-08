import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function Dashboard() {
  // const { isFetching } = useQuery({ queryKey: ["user"] });
  // console.log(isFetching);
  // if (isFetching) return <Spinner />;
  return (
    <div className=" text-lightgray flex h-[100%] w-[100%] items-center justify-center bg-[url('/public/bg-1.png')] bg-cover text-3xl font-semibold invert">
      <span id="lborder" className="relative">
        {" "}
        Select any chats from the SideBar :)
      </span>
    </div>
  );
}

export default Dashboard;
