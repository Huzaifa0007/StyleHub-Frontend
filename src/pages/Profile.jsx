import { ShieldCheck, UserRound } from "lucide-react";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Empty from "../components/common/Empty";

import ProfileCard from "../components/profile/ProfileCard";
import ProfileActions from "../components/profile/ProfileActions";

import { useGetProfileQuery } from "../features/user/userAPI";

function Profile() {
  const { data, isLoading } = useGetProfileQuery();

  if (isLoading) {
    return <Loader />;
  }

  const user = data?.user;

  if (!user) {
    return <Empty title="Profile not found" />;
  }

  return (
    <Container className="pb-16 pt-8 sm:pt-10 lg:pt-12">
      {/* Page Header */}

      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gray-600">
          <UserRound size={14} />
          My Account
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              My Profile
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Manage your personal information, account settings, and StyleHub
              preferences.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-xs font-medium text-gray-400 sm:flex">
            <ShieldCheck size={15} />
            Your account is secure
          </div>
        </div>
      </div>

      {/* Profile Content */}

      <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2">
          <ProfileCard user={user} />
        </div>

        <ProfileActions />
      </div>
    </Container>
  );
}

export default Profile;
