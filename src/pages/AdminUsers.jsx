import { Users } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import ConfirmDialog from "../components/ui/ConfirmDialog";

import UserTable from "../features/admin/users/UserTable";

import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../features/admin/adminAPI";

function AdminUsers() {
  const [selectedUser, setSelectedUser] = useState(null);

  const { data, isLoading } = useGetUsersQuery();

  const [deleteUser, { isLoading: deleting }] = useDeleteUserMutation();

  if (isLoading) {
    return <Loader />;
  }

  const users = data?.data || [];

  async function handleDelete() {
    try {
      await deleteUser(selectedUser._id).unwrap();

      toast.success("User deleted");

      setSelectedUser(null);
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-950 text-white">
              <Users size={17} />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Store Management
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-[-0.04em] text-gray-950 sm:text-4xl">
            User Management
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
            Manage registered customers, administrator accounts, and user
            access.
          </p>
        </div>

        {/* User Count */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-500" />

          <span className="text-sm font-medium text-gray-600">
            {users.length} {users.length === 1 ? "User" : "Users"}
          </span>
        </div>
      </div>

      <UserTable users={users} onDelete={setSelectedUser} />

      <ConfirmDialog
        open={!!selectedUser}
        title="Delete User"
        message={`Delete ${selectedUser?.name}?`}
        loading={deleting}
        onCancel={() => setSelectedUser(null)}
        onConfirm={handleDelete}
      />
    </Container>
  );
}

export default AdminUsers;
