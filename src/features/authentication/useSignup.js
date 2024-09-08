import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      if (user.user.role === "authenticated") {
        navigate("/dashboard", { replace: true });
        toast.success("Successfully Signed in");
      }
    },
    onError: (error) => {
      console.log(error.message);
      if (error.message === "User already registered")
        toast.error(`${error.message}, Consider Logging in`);
      //   toast.error(`An account already exists ${}`);
    },
  });
  return { signup, isLoading };
}
