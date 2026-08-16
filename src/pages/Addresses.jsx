import { useState } from "react";
import { MapPin, Plus, MapPinned } from "lucide-react";
import toast from "react-hot-toast";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Empty from "../components/common/Empty";
import Button from "../components/ui/Button";

import {
  useGetAddressesQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
  useSetDefaultAddressMutation,
} from "../features/address/addressAPI";

import AddressCard from "../features/address/AddressCard";
import AddressModal from "../features/address/AddressModal";

function Addresses() {
  const { data, isLoading } = useGetAddressesQuery();

  const [addAddress, { isLoading: adding }] = useAddAddressMutation();

  const [updateAddress, { isLoading: updating }] = useUpdateAddressMutation();

  const [deleteAddress] = useDeleteAddressMutation();

  const [setDefaultAddress] = useSetDefaultAddressMutation();

  const addresses = data?.data || [];

  const [modalOpen, setModalOpen] = useState(false);

  const [editingAddress, setEditingAddress] = useState(null);

  if (isLoading) return <Loader />;

  async function handleAdd(data) {
    try {
      await addAddress(data).unwrap();

      toast.success("Address Added");

      setModalOpen(false);
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  async function handleEdit(data) {
    try {
      await updateAddress({
        id: editingAddress._id,
        ...data,
      }).unwrap();

      toast.success("Address Updated");

      setEditingAddress(null);

      setModalOpen(false);
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this address?")) return;

    try {
      await deleteAddress(id).unwrap();

      toast.success("Address Deleted");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  async function handleDefault(id) {
    try {
      await setDefaultAddress(id).unwrap();

      toast.success("Default Address Updated");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <Container className="py-10 sm:py-12 lg:py-16">
      {/* Header */}

      <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
              <MapPinned size={18} className="text-gray-700" />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Account
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-[42px]">
            My Addresses
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
            Manage your saved shipping addresses and choose where your orders
            should be delivered.
          </p>
        </div>

        {/* Add Address */}

        <Button
          className="w-full sm:w-auto"
          onClick={() => {
            setEditingAddress(null);
            setModalOpen(true);
          }}
        >
          <Plus size={18} />
          Add Address
        </Button>
      </div>

      {/* Address Count */}

      {addresses.length > 0 && (
        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />

            <span className="text-sm font-medium text-gray-500">
              Saved Addresses
            </span>
          </div>

          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
            {addresses.length}{" "}
            {addresses.length === 1 ? "Address" : "Addresses"}
          </span>
        </div>
      )}

      {/* Addresses */}

      {!addresses.length ? (
        <Empty
          title="No addresses yet"
          message="Save a shipping address to make checkout faster and easier."
          action={
            <Button
              className="mx-auto w-auto"
              onClick={() => {
                setEditingAddress(null);
                setModalOpen(true);
              }}
            >
              <Plus size={18} />
              Add Your First Address
            </Button>
          }
        />
      ) : (
        <div className="grid gap-5 lg:grid-cols-2">
          {addresses.map((address) => (
            <AddressCard
              key={address._id}
              address={address}
              onEdit={(address) => {
                setEditingAddress(address);
                setModalOpen(true);
              }}
              onDelete={handleDelete}
              onSetDefault={handleDefault}
            />
          ))}
        </div>
      )}

      {/* Address Modal */}

      <AddressModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingAddress(null);
        }}
        title={editingAddress ? "Edit Address" : "Add Address"}
        initialData={editingAddress}
        onSubmit={editingAddress ? handleEdit : handleAdd}
        loading={adding || updating}
      />
    </Container>
  );
}

export default Addresses;
