import {
  UserRoundPen,
  LockKeyhole,
  Package,
  Heart,
  ShoppingBag,
  MapPin,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function ProfileActions() {
  const actions = [
    {
      title: "Edit Profile",
      description: "Update your personal information",
      icon: UserRoundPen,
      to: "/profile/edit",
    },
    {
      title: "Change Password",
      description: "Update your account password",
      icon: LockKeyhole,
      to: "/profile/change-password",
    },
    {
      title: "My Orders",
      description: "View and track your orders",
      icon: Package,
      to: "/orders",
    },
    {
      title: "Wishlist",
      description: "View your saved products",
      icon: Heart,
      to: "/wishlist",
    },
    {
      title: "Shopping Cart",
      description: "Review items in your cart",
      icon: ShoppingBag,
      to: "/cart",
    },
    {
      title: "Manage Addresses",
      description: "Manage your delivery addresses",
      icon: MapPin,
      to: "/addresses",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
      {/* Header */}

      <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
          Account
        </p>

        <h2 className="mt-1 text-xl font-bold tracking-tight text-gray-950">
          Quick Access
        </h2>

        <p className="mt-2 text-xs leading-5 text-gray-500">
          Manage your StyleHub account and shopping activity.
        </p>
      </div>

      {/* Actions */}

      <div className="p-3 sm:p-4">
        <div className="space-y-1.5">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.to}
                to={action.to}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-transparent
                  p-3
                  transition-all
                  duration-300

                  hover:border-gray-200
                  hover:bg-gray-50
                  hover:shadow-sm
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-100
                    text-gray-600
                    transition-all
                    duration-300

                    group-hover:bg-gray-950
                    group-hover:text-white
                  "
                >
                  <Icon size={18} />
                </div>

                {/* Text */}

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {action.title}
                  </p>

                  <p className="mt-0.5 text-[11px] leading-4 text-gray-400">
                    {action.description}
                  </p>
                </div>

                {/* Arrow */}

                <ChevronRight
                  size={17}
                  className="
                    shrink-0
                    text-gray-300
                    transition-all
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:text-gray-700
                  "
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}

      <div className="border-t border-gray-100 bg-gray-50 px-5 py-4 sm:px-6">
        <p className="text-center text-[11px] font-medium text-gray-400">
          Manage your StyleHub experience in one place.
        </p>
      </div>
    </div>
  );
}

export default ProfileActions;
