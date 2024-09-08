import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import MiniSpinner from "../ui/MiniSpinner";
import { useLogin } from "../features/authentication/useLogin";
import Spinner from "../ui/Spinner";

function Login() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { login, isLoading } = useLogin();

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      },
    );
  }
  if (isLoading) return <Spinner />;

  return (
    <div className=" flex h-screen  w-screen items-center justify-center bg-dimgray">
      <div className=" flex h-[60%] w-[50%] flex-col items-center justify-center rounded-2xl bg-darkgray shadow-xl shadow-black">
        <img
          src="/logo-2.png"
          alt="logo"
          className=" h-24 w-auto rounded-full"
        />
        <form
          className="flex h-[55%] w-[50%] flex-col items-center justify-center gap-2 rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="h-auto w-full">
            <input
              id="email"
              autoComplete="username"
              placeholder="Enter email.."
              className=" mb-2 h-10 w-full rounded-full border-none bg-dimgray p-2 text-silver shadow-xl shadow-black transition-all duration-100 focus:translate-y-[-4px] focus:outline-none"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Provide a valid email address",
                },
              })}
            />

            <div className="flex items-center justify-center text-sm text-red-500">
              {errors?.email?.message}
            </div>
          </div>

          <div className="h-auto w-full">
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Enter password.."
              className=" mb-2 h-10 w-full rounded-full border-none bg-dimgray p-2 text-silver shadow-xl shadow-black transition-all duration-100 focus:translate-y-[-4px] focus:outline-none"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />

            <div className="flex items-center justify-center text-sm text-red-500">
              {errors?.password?.message}
            </div>
          </div>

          <button
            type="submit"
            className=" mt-2 h-10 w-full rounded-full border-2 border-darkgray bg-turqoise font-semibold text-darkgray shadow-xl shadow-black hover:border-turqoise hover:bg-darkgray hover:text-turqoise"
          >
            LOGIN
          </button>
        </form>
        <div className=" text-silver">
          Do not have an account?{" "}
          <Link
            className="border-b-2 border-turqoise text-turqoise"
            to="/signup"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
