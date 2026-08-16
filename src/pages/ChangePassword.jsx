import { LockKeyhole } from "lucide-react";

import Container from "../components/common/Container";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";

function ChangePassword() {
  return (
    <Container className="py-10 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="mb-10 max-w-2xl sm:mb-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
            <LockKeyhole size={18} className="text-gray-700" />
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
            Security
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-[42px]">
          Change Password
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
          Keep your account secure by regularly updating your password.
        </p>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <div className="border-b border-gray-100 bg-gray-50/70 px-5 py-5 sm:px-7">
            <h2 className="text-base font-semibold text-gray-950">
              Password & Security
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter your current password and choose a new one.
            </p>
          </div>

          <div className="p-5 sm:p-7 lg:p-8">
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ChangePassword;
