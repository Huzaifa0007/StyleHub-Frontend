import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Plus, Search, Package } from "lucide-react";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Pagination from "../components/ui/Pagination";
import ConfirmDialog from "../components/ui/ConfirmDialog";

import ProductTable from "../features/admin/products/ProductTable";

import {
  useGetAdminProductsQuery,
  useDeleteProductMutation,
} from "../features/admin/adminAPI";

function AdminProducts() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data, isLoading } = useGetAdminProductsQuery({
    page,
    keyword: search,
  });

  const [deleteProduct, { isLoading: deleting }] = useDeleteProductMutation();

  if (isLoading) {
    return <Loader />;
  }

  const result = data?.data;

  const products = result?.products || [];

  async function handleDelete() {
    if (!selectedProduct) return;

    try {
      await deleteProduct(selectedProduct._id).unwrap();

      toast.success("Product deleted");

      setSelectedProduct(null);
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-950 text-white">
              <Package size={16} />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Store Management
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-[-0.035em] text-gray-950 sm:text-4xl">
            Products
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Manage your product catalog, inventory, pricing and availability.
          </p>
        </div>

        <Link to="/admin/products/new">
          <Button className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 sm:w-auto">
            <Plus size={18} />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Search / Toolbar */}
      <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-md">
            <div className="relative">
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="pl-11"
              />
            </div>
          </div>

          <div className="text-sm text-gray-500">
            {products.length} {products.length === 1 ? "product" : "products"}{" "}
            shown
          </div>
        </div>
      </div>

      {/* Product Table */}
      <ProductTable products={products} onDelete={setSelectedProduct} />

      {/* Pagination */}
      <Pagination
        currentPage={result?.currentPage || 1}
        totalPages={result?.totalPages || 1}
        onPageChange={setPage}
      />

      {/* Delete Confirmation */}
      <ConfirmDialog
        open={!!selectedProduct}
        title="Delete Product"
        message={`Delete "${selectedProduct?.name}" ?`}
        loading={deleting}
        onCancel={() => setSelectedProduct(null)}
        onConfirm={handleDelete}
      />
    </Container>
  );
}

export default AdminProducts;
