import { ShieldCheck, UsersRound } from "lucide-react";

import UserRow from "./UserRow";

function UserTable({ users, onDelete }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50">
            <UsersRound size={17} className="text-gray-700" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-950 sm:text-[15px]">
              All Users
            </h2>

            <p className="mt-0.5 text-xs text-gray-400">
              Registered StyleHub accounts
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-1.5 text-xs font-medium text-gray-400 sm:flex">
          <ShieldCheck size={14} />

          <span>Role access enabled</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:px-6">
                User
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Email
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Role
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Joined
              </th>

              <th className="px-5 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:px-6">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <UserRow key={user._id} user={user} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Hint */}
      <div className="border-t border-gray-100 bg-gray-50/40 px-5 py-3.5 sm:px-6">
        <p className="text-[11px] text-gray-400">
          Update user roles directly from the table or remove an account using
          the delete action.
        </p>
      </div>
    </section>
  );
}

export default UserTable;
