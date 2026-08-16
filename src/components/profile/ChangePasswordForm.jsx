import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { useChangePasswordMutation } from "../../features/user/userAPI";

function ChangePasswordForm() {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    try {
      await changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }).unwrap();

      toast.success("Password changed successfully");

      reset();
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  const passwordsMismatch = confirmPassword && newPassword !== confirmPassword;

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-7">
      {/* Security Header */}
      <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50/70 p-5 sm:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">
          <LockKeyhole size={18} />
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-950">
            Secure your account
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            Choose a strong password that you don't use on other websites.
          </p>
        </div>
      </div>

      {/* Password Fields */}
      <div>
        <div className="mb-5">
          <h3 className="text-base font-semibold text-gray-950">
            Password Details
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Enter your current password and create a new one.
          </p>
        </div>

        <div className="space-y-5">
          <Input
            label="Current Password"
            type="password"
            name="currentPassword"
            register={register}
            error={errors.currentPassword}
          />

          <Input
            label="New Password"
            type="password"
            name="newPassword"
            register={register}
            error={errors.newPassword}
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
          />

          {/* Password Match Feedback */}
          {passwordsMismatch && (
            <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
              <p className="text-sm font-medium text-red-600">
                Passwords do not match.
              </p>

              <p className="mt-1 text-xs text-red-500">
                Make sure both password fields contain the same password.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Security Notice */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <ShieldCheck size={15} className="text-gray-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Keep your password private
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Never share your password with anyone, including StyleHub support.
            </p>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="border-t border-gray-100 pt-6">
        <Button
          type="submit"
          disabled={isLoading || newPassword !== confirmPassword}
        >
          {isLoading ? "Updating..." : "Change Password"}
        </Button>
      </div>
    </form>
  );
}

export default ChangePasswordForm;
