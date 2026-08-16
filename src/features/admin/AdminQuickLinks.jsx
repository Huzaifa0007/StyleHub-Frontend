import { Link } from "react-router-dom";
import { Package, ShoppingBag, Users, ArrowUpRight } from "lucide-react";

const quickLinks = [
  {
    title: "Product Management",
    description: "Add, edit, delete and manage store products.",
    path: "/admin/products",
    icon: Package,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Order Management",
    description: "View orders and update their status.",
    path: "/admin/orders",
    icon: ShoppingBag,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "User Management",
    description: "Manage users, roles and customer accounts.",
    path: "/admin/users",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

function AdminQuickLinks() {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
          Management
        </p>

        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-[-0.025em] text-gray-950">
              Quick Management
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Access the main areas of your store.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {quickLinks.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.path}
              to={link.path}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200/80
                bg-white
                p-6
                shadow-[0_1px_2px_rgba(0,0,0,0.03)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gray-300
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)]
              "
            >
              {/* Subtle hover background */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      ${link.iconBg}
                    `}
                  >
                    <Icon size={21} className={link.iconColor} />
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      text-gray-400
                      transition-all
                      duration-300
                      group-hover:border-gray-950
                      group-hover:bg-gray-950
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                <h3 className="mt-6 text-[17px] font-bold tracking-[-0.02em] text-gray-950">
                  {link.title}
                </h3>

                <p className="mt-2 max-w-[290px] text-sm leading-6 text-gray-500">
                  {link.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-gray-700 transition-colors group-hover:text-gray-950">
                  Manage
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default AdminQuickLinks;
