import { CalendarDays, Mail, Trash2, UserRound } from "lucide-react";

import RoleSelect from "./RoleSelect";

function UserRow({ user, onDelete }) {
  const userInitial = user.name?.charAt(0)?.toUpperCase() || "U";

  const formattedDate = new Date(user.createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <tr className="group transition-colors duration-200 hover:bg-gray-50/70">
      {/* User */}
      <td className="px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-sm font-semibold text-white shadow-sm">
            {userInitial}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-950">
              {user.name || "Unknown User"}
            </p>

            <p className="mt-0.5 text-xs text-gray-400">StyleHub account</p>
          </div>
        </div>
      </td>

      {/* Email */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-2.5">
          <Mail size={15} className="shrink-0 text-gray-400" />

          <span className="text-sm text-gray-600">{user.email}</span>
        </div>
      </td>

      {/* Role */}
      <td className="px-5 py-5">
        <RoleSelect user={user} />
      </td>

      {/* Joined */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-2">
          <CalendarDays size={15} className="shrink-0 text-gray-400" />

          <span className="text-sm text-gray-600">{formattedDate}</span>
        </div>
      </td>

      {/* Delete */}
      <td className="px-5 py-5 text-right sm:px-6">
        <button
          type="button"
          onClick={() => onDelete(user)}
          title={`Delete ${user.name}`}
          aria-label={`Delete ${user.name}`}
          className="
            inline-flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            border
            border-gray-200
            bg-white
            text-gray-400
            transition-all
            duration-200
            hover:border-red-200
            hover:bg-red-50
            hover:text-red-600
            focus:outline-none
            focus:ring-2
            focus:ring-red-500/20
            active:scale-95
          "
        >
          <Trash2 size={16} strokeWidth={1.8} />
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
