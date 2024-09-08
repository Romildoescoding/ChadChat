import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSignup } from "../features/authentication/useSignup";
import Spinner from "../ui/Spinner";
import MiniSpinner from "../ui/MiniSpinner";

function SignUp() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit({ username, email, password }) {
    signup(
      {
        username,
        password,
        email,
      },
      {
        onSettled: () => {
          reset();
        },
      },
    );
  }

  return (
    <div className=" flex h-screen  w-screen items-center justify-center bg-dimgray">
      <div
        className={`flex ${Object.keys(errors).length ? "h-[80%]" : "h-[75%]"} w-[50%] flex-col items-center justify-center rounded-2xl bg-darkgray shadow-xl shadow-black`}
      >
        <img
          src="/logo-2.png"
          alt="logo"
          className=" h-24 w-auto rounded-full"
        />
        <form
          className={`flex ${Object.keys(errors).length ? "h-[70%]" : "h-[60%]"} w-[50%] flex-col items-center justify-center gap-2 rounded-2xl`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="h-auto w-full">
            <input
              type="text"
              id="name"
              placeholder="Enter username.."
              autoComplete="username"
              className="  mb-2 h-10 w-full rounded-full border-none bg-dimgray p-2 text-silver shadow-xl shadow-black transition-all duration-100 focus:translate-y-[-4px] focus:outline-none"
              {...register("username", { required: "This field is required" })}
            />
            <div className="flex items-center justify-center text-sm text-red-500">
              {errors?.username?.message}
            </div>
          </div>

          <div className="h-auto w-full">
            <input
              id="email"
              placeholder="Enter email.."
              autoComplete="username"
              className="  mb-2 h-10 w-full rounded-full border-none bg-dimgray p-2 text-silver shadow-xl shadow-black transition-all duration-100 focus:translate-y-[-4px] focus:outline-none"
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
              id="password"
              autoComplete="new-password"
              placeholder="Enter password.."
              className="  mb-2 h-10 w-full rounded-full border-none bg-dimgray p-2 text-silver shadow-xl shadow-black transition-all duration-100 focus:translate-y-[-4px] focus:outline-none"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
            <div className=" flex items-center justify-center text-sm text-red-500">
              {errors?.password?.message}
            </div>
          </div>

          <div className="h-auto w-full">
            <input
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm password.."
              className="  mb-2 h-10 w-full rounded-full border-none bg-dimgray p-2 text-silver shadow-xl shadow-black transition-all duration-100 focus:translate-y-[-4px] focus:outline-none"
              {...register("confirmPassword", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
            <div className=" flex items-center justify-center text-sm text-red-500">
              {errors?.confirmPassword?.message}
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 h-10 w-full rounded-full border-2 border-darkgray bg-turqoise font-semibold text-darkgray shadow-xl shadow-black hover:border-turqoise hover:bg-darkgray hover:text-turqoise"
          >
            {isLoading ? <MiniSpinner /> : "SIGN UP"}
          </button>
        </form>
        <div className=" text-silver">
          Already have an account?{" "}
          <Link
            className="border-b-2 border-turqoise text-turqoise"
            to="/login"
          >
            LOG IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
