import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyOrders() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border bg-white py-20 shadow-sm">
      <ShoppingBag size={70} className="mb-6 text-gray-400" />

      <h2 className="text-3xl font-bold">No Orders Yet</h2>

      <p className="mt-3 text-gray-500">
        Looks like you haven't placed any order.
      </p>

      <Link
        to="/products"
        className="mt-8 rounded-lg bg-black px-8 py-3 text-white transition hover:bg-gray-800"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default EmptyOrders;
