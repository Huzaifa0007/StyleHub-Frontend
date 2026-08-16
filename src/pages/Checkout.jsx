import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { MapPin, ShieldCheck } from "lucide-react";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Button from "../components/ui/Button";

import { useGetCartQuery } from "../features/cart/cartAPI";

import {
  useGetAddressesQuery,
  useAddAddressMutation,
} from "../features/address/addressAPI";

import { useCreateOrderMutation } from "../features/order/orderAPI";

import CheckoutSummary from "../features/checkout/CheckoutSummary";
import AddressSelector from "../features/checkout/AddressSelector";
import AddressModal from "../features/address/AddressModal";

function Checkout() {
  const navigate = useNavigate();

  const { data: cartData, isLoading: cartLoading } = useGetCartQuery();

  const { data: addressData, isLoading: addressLoading } =
    useGetAddressesQuery();

  const [createOrder, { isLoading: placingOrder }] = useCreateOrderMutation();

  const [addAddress, { isLoading: addingAddress }] = useAddAddressMutation();

  const cart = cartData?.data;

  const addresses = addressData?.data || [];

  const [selectedAddress, setSelectedAddress] = useState("");

  const [addressModalOpen, setAddressModalOpen] = useState(false);

  useEffect(() => {
    if (!addresses.length) {
      setSelectedAddress("");
      return;
    }

    const selectedStillExists = addresses.some(
      (address) => address._id === selectedAddress,
    );

    if (selectedStillExists) return;

    const defaultAddress =
      addresses.find((address) => address.isDefault) || addresses[0];

    setSelectedAddress(defaultAddress._id);
  }, [addresses, selectedAddress]);

  if (cartLoading || addressLoading) {
    return <Loader />;
  }

  async function handleAddAddress(data) {
    try {
      const response = await addAddress(data).unwrap();

      toast.success("Address Added");

      setAddressModalOpen(false);

      const newAddress = response?.data;

      if (newAddress?._id) {
        setSelectedAddress(newAddress._id);
      }
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  async function placeOrder() {
    if (!selectedAddress) {
      toast.error("Please select a shipping address");
      return;
    }

    try {
      const res = await createOrder({
        addressId: selectedAddress,
        paymentMethod: "COD",
      }).unwrap();

      console.log(res);

      toast.success("Order placed successfully");

      navigate("/orders");
    } catch (err) {
      console.log(err);

      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  if (!cart || !cart.items?.length) {
    return (
      <Container>
        <div className="flex min-h-[55vh] flex-col items-center justify-center py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <MapPin size={28} className="text-gray-500" />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Your Cart is Empty
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
            Add some products to your cart before continuing to checkout.
          </p>

          <Button
            className="mt-8 w-auto min-w-[190px]"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="pb-16 pt-8 sm:pt-10 lg:pt-12">
      {/* Header */}

      <div className="mb-10 max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gray-600">
          <ShieldCheck size={14} />
          Secure Checkout
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
          Checkout
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
          Select your shipping address and review your order before placing it.
        </p>
      </div>

      {/* Checkout Content */}

      <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
        {/* Address Section */}

        <div className="lg:col-span-2">
          <AddressSelector
            addresses={addresses}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            onAddAddress={() => setAddressModalOpen(true)}
          />
        </div>

        {/* Summary */}

        <CheckoutSummary
          cart={cart}
          selectedAddress={selectedAddress}
          paymentMethod="Cash on Delivery"
          onPlaceOrder={placeOrder}
          loading={placingOrder}
        />
      </div>

      {/* Add Address Modal */}

      <AddressModal
        open={addressModalOpen}
        onClose={() => setAddressModalOpen(false)}
        title="Add Address"
        initialData={null}
        onSubmit={handleAddAddress}
        loading={addingAddress}
      />
    </Container>
  );
}

export default Checkout;
