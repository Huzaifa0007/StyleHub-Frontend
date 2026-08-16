import { useState } from "react";
import toast from "react-hot-toast";

import { useUpdateUserRoleMutation } from "../adminAPI";

function RoleSelect({ user }) {
  const [updateRole, { isLoading }] = useUpdateUserRoleMutation();

  const [selectedRole, setSelectedRole] = useState(user.role);

  async function handleChange(e) {
    const newRole = e.target.value;

    setSelectedRole(newRole);

    try {
      await updateRole({
        id: user._id,
        role: newRole,
      }).unwrap();

      toast.success("Role Updated");
    } catch (err) {
      setSelectedRole(user.role);

      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  const roleStyles = {
    user: "border-gray-200 bg-gray-50 text-gray-700 focus:border-gray-400",
    admin:
      "border-purple-200 bg-purple-50 text-purple-700 focus:border-purple-400",
  };

  const currentStyle =
    roleStyles[selectedRole] ||
    "border-gray-200 bg-gray-50 text-gray-700 focus:border-gray-400";

  return (
    <div className="relative w-[118px]">
      <select
        value={selectedRole}
        onChange={handleChange}
        disabled={isLoading}
        aria-label={`Change role for ${user.name}`}
        className={`
          w-full
          appearance-none
          rounded-xl
          border
          px-3
          py-2.5
          pr-8
          text-xs
          font-semibold
          capitalize
          outline-none
          transition-all
          duration-200
          ${currentStyle}
          hover:brightness-[0.98]
          focus:ring-2
          focus:ring-black/5
          disabled:cursor-not-allowed
          disabled:opacity-60
        `}
      >
        <option value="user">User</option>

        <option value="admin">Admin</option>
      </select>

      {/* Custom Arrow */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Loading State */}
      {isLoading && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-[1px]">
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
        </span>
      )}
    </div>
  );
}

export default RoleSelect;
