import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ImagePlus, Package, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Container from "../components/common/Container";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Loader from "../components/common/Loader";
import Select from "../components/ui/Select";

import { useGetProductsQuery } from "../features/products/productApi";

import {
  useCreateProductMutation,
  useUpdateProductMutation,
  useReplaceProductImagesMutation,
} from "../features/admin/adminAPI";

function ProductForm() {
  const navigate = useNavigate();

  const { id } = useParams();

  const isEdit = Boolean(id);

  const { data, isLoading } = useGetProductsQuery({
    limit: 1000,
  });

  const products = data?.data?.products || [];

  const product = useMemo(
    () => products.find((p) => p._id === id),
    [products, id],
  );

  const [createProduct, { isLoading: creating }] = useCreateProductMutation();

  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();

  const [replaceImages, { isLoading: replacingImages }] =
    useReplaceProductImagesMutation();

  const [previewImages, setPreviewImages] = useState([]);

  const [newImages, setNewImages] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
        brand: product.brand,
        category: product.category,
        price: product.price,
        discountPrice: product.discountPrice,
        stock: product.stock,
        sizes: product.sizes.join(", "),
        colors: product.colors.join(", "),
        isFeatured: product.isFeatured,
      });
    }
  }, [product, reset]);

  function handleImageChange(e) {
    const files = Array.from(e.target.files);

    setNewImages(files);

    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  }

  if (isLoading && isEdit) {
    return <Loader />;
  }

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <button
          type="button"
          onClick={() => navigate("/admin/products")}
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-950"
        >
          <ArrowLeft size={16} />
          Back to Products
        </button>

        <div className="flex items-start gap-4">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-white sm:flex">
            <Package size={20} />
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                Product Management
              </span>

              {isEdit && (
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Edit
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold tracking-[-0.035em] text-gray-950 sm:text-4xl">
              {isEdit ? "Edit Product" : "Create Product"}
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {isEdit
                ? "Update product details, pricing, inventory and images."
                : "Add a new product to your StyleHub catalog."}
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-5xl">
        <form
          onSubmit={handleSubmit(async function onSubmit(values) {
            try {
              const formData = new FormData();

              formData.append("name", values.name);
              formData.append("description", values.description);
              formData.append("brand", values.brand);
              formData.append("category", values.category);
              formData.append("price", values.price);
              formData.append("discountPrice", values.discountPrice || 0);
              formData.append("stock", values.stock);

              formData.append(
                "sizes",
                JSON.stringify(
                  values.sizes
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                ),
              );

              formData.append(
                "colors",
                JSON.stringify(
                  values.colors
                    .split(",")
                    .map((c) => c.trim())
                    .filter(Boolean),
                ),
              );

              formData.append(
                "isFeatured",
                values.isFeatured ? "true" : "false",
              );

              if (!isEdit) {
                newImages.forEach((image) => {
                  formData.append("images", image);
                });

                await createProduct(formData).unwrap();

                toast.success("Product created successfully");
              } else {
                await updateProduct({
                  id,
                  body: {
                    ...values,
                    sizes: values.sizes
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),

                    colors: values.colors
                      .split(",")
                      .map((c) => c.trim())
                      .filter(Boolean),
                  },
                }).unwrap();

                if (newImages.length > 0) {
                  const imageForm = new FormData();

                  newImages.forEach((img) => {
                    imageForm.append("images", img);
                  });

                  await replaceImages({
                    id,
                    data: imageForm,
                  }).unwrap();
                }

                toast.success("Product updated successfully");
              }

              navigate("/admin/products");
            } catch (err) {
              toast.error(err?.data?.message || "Something went wrong");
            }
          })}
          className="space-y-6"
        >
          {/* Product Information */}
          <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-5 py-5 sm:px-7">
              <h2 className="text-base font-bold text-gray-950">
                Product Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Basic information customers will see about this product.
              </p>
            </div>

            <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-2">
              <div className="md:col-span-2">
                <Input
                  label="Product Name"
                  name="name"
                  register={register}
                  error={errors.name}
                />
              </div>

              <Input
                label="Brand"
                name="brand"
                register={register}
                error={errors.brand}
              />

              <Select
                label="Category"
                name="category"
                register={register}
                error={errors.category}
              >
                <option value="">Select Category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Accessories">Accessories</option>
                <option value="Shoes">Shoes</option>
              </Select>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Description
                </label>

                <textarea
                  rows={6}
                  {...register("description")}
                  placeholder="Describe the product, materials, fit, style and other important details..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-gray-950
                    focus:ring-4
                    focus:ring-gray-950/5
                  "
                />
              </div>
            </div>
          </section>

          {/* Pricing & Inventory */}
          <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-5 py-5 sm:px-7">
              <h2 className="text-base font-bold text-gray-950">
                Pricing & Inventory
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Set your product pricing and available inventory.
              </p>
            </div>

            <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-3">
              <Input
                label="Price"
                type="number"
                name="price"
                register={register}
                error={errors.price}
              />

              <Input
                label="Discount Price"
                type="number"
                name="discountPrice"
                register={register}
                error={errors.discountPrice}
              />

              <Input
                label="Stock"
                type="number"
                name="stock"
                register={register}
                error={errors.stock}
              />
            </div>
          </section>

          {/* Variants */}
          <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-5 py-5 sm:px-7">
              <h2 className="text-base font-bold text-gray-950">
                Product Variants
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Define the available sizes and colors for this product.
              </p>
            </div>

            <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-2">
              <Input
                label="Sizes"
                name="sizes"
                register={register}
                placeholder="S, M, L, XL"
              />

              <Input
                label="Colors"
                name="colors"
                register={register}
                placeholder="Black, White, Blue"
              />
            </div>
          </section>

          {/* Featured Product */}
          <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-7">
              <div>
                <h2 className="text-base font-bold text-gray-950">
                  Featured Product
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Highlight this product in featured sections.
                </p>
              </div>

              <label
                htmlFor="featured"
                className="relative inline-flex cursor-pointer items-center"
              >
                <input
                  id="featured"
                  type="checkbox"
                  {...register("isFeatured")}
                  className="peer sr-only"
                />

                <div className="h-6 w-11 rounded-full bg-gray-200 transition peer-checked:bg-gray-950 peer-focus:ring-4 peer-focus:ring-gray-950/10" />

                <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
              </label>
            </div>
          </section>

          {/* Images */}
          <section className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-5 py-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-600">
                  <ImagePlus size={18} />
                </div>

                <div>
                  <h2 className="text-base font-bold text-gray-950">
                    Product Images
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Upload high-quality images of your product.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <label
                htmlFor="product-images"
                className="
                  group
                  flex
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-dashed
                  border-gray-200
                  bg-gray-50/50
                  px-6
                  py-10
                  text-center
                  transition
                  hover:border-gray-400
                  hover:bg-gray-50
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm transition group-hover:text-gray-950">
                  <ImagePlus size={21} />
                </div>

                <p className="mt-4 text-sm font-semibold text-gray-900">
                  Click to upload product images
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  PNG, JPG or WEBP · Multiple images supported
                </p>

                <input
                  id="product-images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="sr-only"
                />
              </label>

              {/* Preview */}
              {previewImages.length > 0 ? (
                <div className="mt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Sparkles size={14} className="text-gray-400" />

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                      New Images
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {previewImages.map((img, index) => (
                      <div
                        key={index}
                        className="group aspect-square overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                isEdit &&
                product?.images?.length > 0 && (
                  <div className="mt-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Package size={14} className="text-gray-400" />

                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                        Current Images
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                      {product.images.map((img) => (
                        <div
                          key={img.public_id}
                          className="group aspect-square overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
                        >
                          <img
                            src={img.url}
                            alt=""
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Submit */}
          <div className="sticky bottom-4 z-10 rounded-2xl border border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">
                  {isEdit ? "Ready to update?" : "Ready to publish?"}
                </p>

                <p className="mt-0.5 text-xs text-gray-400">
                  {isEdit
                    ? "Save your product changes."
                    : "Add this product to your catalog."}
                </p>
              </div>

              <div className="flex w-full gap-3 sm:w-auto">
                <Button
                  type="button"
                  onClick={() => navigate("/admin/products")}
                  className="w-full rounded-xl border border-gray-200 bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-500 sm:w-auto"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={creating || updating || replacingImages}
                  className="w-full rounded-xl px-6 py-3 text-sm font-semibold sm:w-auto"
                >
                  {creating && "Creating..."}

                  {updating && "Updating..."}

                  {replacingImages && "Uploading Images..."}

                  {!creating &&
                    !updating &&
                    !replacingImages &&
                    (isEdit ? "Update Product" : "Create Product")}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default ProductForm;
