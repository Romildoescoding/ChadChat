import { Link } from "react-router-dom";

function PageNotFound() {
  return <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center text-xl font-extrabold">
    <span className=" text-3xl">Page not found :(</span>
    <Link to='dashboard' className=" text-sky-400 border-b-2 border-sky-400">Click here to go to the Dashboard {'->'} </Link>
      </div>;
}

export default PageNotFound;
