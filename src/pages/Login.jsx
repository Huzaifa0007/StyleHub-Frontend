import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { useLoginMutation } from "../features/auth/authAPI";
import { setUser } from "../features/auth/authSlice";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import AuthLayout from "../components/layout/AuthLayout";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      dispatch(
        setUser({
          user: res.user,
          token: res.token,
        }),
      );

      toast.success(res.message);

      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || "Login Failed");
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your StyleHub account and continue shopping."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Email */}
        <div className="w-full">
          <Input
            label="Email Address"
            type="email"
            name="email"
            register={register}
            placeholder="you@example.com"
            error={errors.email}
            autoComplete="email"
          />
        </div>

        {/* Password */}
        <div className="mt-8 w-full">
          <Input
            label="Password"
            type="password"
            name="password"
            register={register}
            placeholder="Enter your password"
            error={errors.password}
            autoComplete="current-password"
          />
        </div>

        {/* Login Button */}
        <div className="mt-9 w-full">
          <Button
            type="submit"
            disabled={isLoading}
            className="
              h-[64px]
              rounded-xl
              text-base
              font-semibold
            "
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-3">
                <span
                  className="
                    h-5
                    w-5
                    animate-spin
                    rounded-full
                    border-2
                    border-white/30
                    border-t-white
                  "
                />
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>

        {/* Register */}
        <p
          className="
            mt-9
            w-full
            text-center
            text-[16px]
            leading-7
            text-gray-500
          "
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            className="
              font-semibold
              text-gray-900
              underline
              decoration-gray-400
              underline-offset-4
              transition-colors
              duration-200
              hover:text-red-500
              hover:decoration-red-500
            "
          >
            Create account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;
