import { Mail, Phone, ShieldCheck, Calendar, UserRound } from "lucide-react";

function ProfileCard({ user }) {
  const initial = user?.name?.charAt(0).toUpperCase();

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "Not available";

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
      {/* Profile Hero */}

      <div className="relative overflow-hidden border-b border-gray-100 bg-gray-50 px-6 py-10 sm:px-8 sm:py-12">
        {/* Decorative background */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white opacity-70 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-gray-100 blur-2xl" />

        <div className="relative flex flex-col items-center text-center">
          {/* Avatar */}

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-950 text-4xl font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] ring-8 ring-white">
            {initial}
          </div>

          {/* Name */}

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            {user.name}
          </h2>

          {/* Role */}

          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600 shadow-sm ring-1 ring-gray-200">
            <UserRound size={13} />

            {user.role}
          </span>
        </div>
      </div>

      {/* Account Information */}

      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
            Account Information
          </p>

          <h3 className="mt-1 text-xl font-bold tracking-tight text-gray-950">
            Personal Details
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Email */}

          <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-300 hover:shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition group-hover:bg-gray-950 group-hover:text-white">
                <Mail size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Email
                </p>

                <p className="mt-1 break-all text-sm font-medium text-gray-900">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}

          <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-300 hover:shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition group-hover:bg-gray-950 group-hover:text-white">
                <Phone size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Phone
                </p>

                <p className="mt-1 text-sm font-medium text-gray-900">
                  {user.phone || "Not Added"}
                </p>
              </div>
            </div>
          </div>

          {/* Account Role */}

          <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-300 hover:shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition group-hover:bg-gray-950 group-hover:text-white">
                <ShieldCheck size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Account Type
                </p>

                <p className="mt-1 text-sm font-medium capitalize text-gray-900">
                  {user.role}
                </p>
              </div>
            </div>
          </div>

          {/* Joined */}

          <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-[1px] hover:border-gray-300 hover:shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition group-hover:bg-gray-950 group-hover:text-white">
                <Calendar size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Member Since
                </p>

                <p className="mt-1 text-sm font-medium text-gray-900">
                  {joinedDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-gray-600" />

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Account security
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Keep your account information up to date and use a strong password
              to keep your StyleHub account secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
