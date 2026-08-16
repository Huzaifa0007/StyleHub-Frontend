import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { useRegisterMutation } from "../features/auth/authAPI";

import { setUser } from "../features/auth/authSlice";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import AuthLayout from "../components/layout/AuthLayout";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data).unwrap();

      dispatch(
        setUser({
          user: res.user,
          token: res.token,
        }),
      );

      toast.success(res.message);

      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || "Registration Failed");
    }
  };

  return (
    <AuthLayout
      title="Create your account."
      subtitle="Join StyleHub and discover fashion that feels uniquely yours."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <Input
          label="Full Name"
          type="text"
          name="name"
          register={register}
          placeholder="Enter your full name"
          error={errors.name}
          autoComplete="name"
        />

        {/* Email */}
        <div className="mt-5">
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
        <div className="mt-5">
          <Input
            label="Password"
            type="password"
            name="password"
            register={register}
            placeholder="Create a strong password"
            error={errors.password}
            autoComplete="new-password"
          />
        </div>

        {/* Register Button */}
        <div className="mt-7">
          <Button type="submit" disabled={isLoading} className="h-[56px]">
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

                <span>Creating account...</span>
              </span>
            ) : (
              <>
                <span>Create Account</span>

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </>
            )}
          </Button>
        </div>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span
            className="
              shrink-0
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-gray-400
            "
          >
            Already a member
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Login */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              font-semibold
              text-gray-950
              underline
              decoration-gray-300
              underline-offset-4
              transition-all
              duration-200
              hover:text-gray-500
              hover:decoration-gray-500
            "
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;
