import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Mail, Phone, UserRound } from "lucide-react";

import Input from "../ui/Input";
import Button from "../ui/Button";

import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../features/user/userAPI";

function EditProfileForm() {
  const { data } = useGetProfileQuery();

  const user = data?.user;

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        phone: user.phone,
      });
    }
  }, [user, reset]);

  async function submit(formData) {
    try {
      await updateProfile(formData).unwrap();

      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-7">
      {/* Profile Preview */}
      <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-gray-50/70 p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xl font-bold text-white shadow-sm">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Profile Information
          </p>

          <h3 className="mt-1 truncate text-lg font-semibold text-gray-950">
            {user?.name || "Your Name"}
          </h3>

          <p className="mt-1 truncate text-sm text-gray-500">
            {user?.email || "Your email"}
          </p>
        </div>
      </div>

      {/* Editable Information */}
      <div>
        <div className="mb-5">
          <h3 className="text-base font-semibold text-gray-950">
            Personal Details
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Update the information associated with your account.
          </p>
        </div>

        <div className="space-y-5">
          <div className="relative">
            <Input
              label="Full Name"
              name="name"
              register={register}
              error={errors.name}
            />
          </div>

          <div className="relative">
            <Input
              label="Phone Number"
              name="phone"
              register={register}
              error={errors.phone}
            />
          </div>

          <div className="relative">
            <Input label="Email" value={user?.email || ""} disabled />
          </div>
        </div>
      </div>

      {/* Account Notice */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <Mail size={15} className="text-gray-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Email address</p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Your email address is linked to your account and cannot be edited
              from this page.
            </p>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="border-t border-gray-100 pt-6">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}

export default EditProfileForm;
