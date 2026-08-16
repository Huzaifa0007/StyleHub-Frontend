import { useEffect, useState } from "react";

import Button from "../../components/ui/Button";

const initialState = {
  fullName: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "India",
  postalCode: "",
};

function AddressForm({ initialData, onSubmit, loading }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(initialState);
    }
  }, [initialData]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(formData);
  }

  const inputClass = `
    h-12
    w-full
    rounded-xl
    border
    border-gray-200
    bg-gray-50
    px-4
    text-sm
    text-gray-950
    outline-none
    transition-all
    placeholder:text-gray-400
    hover:border-gray-300
    focus:border-gray-950
    focus:bg-white
    focus:ring-2
    focus:ring-gray-950/10
  `;

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-gray-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}

      <div>
        <div className="mb-4">
          <p className="text-sm font-bold text-gray-950">Contact Information</p>

          <p className="mt-1 text-xs text-gray-500">
            Enter the details of the person receiving the order.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Full Name</label>

            <input
              name="fullName"
              placeholder="e.g. John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Phone Number</label>

            <input
              name="phone"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
        </div>
      </div>

      {/* Address Information */}

      <div className="border-t border-gray-100 pt-6">
        <div className="mb-4">
          <p className="text-sm font-bold text-gray-950">Address Information</p>

          <p className="mt-1 text-xs text-gray-500">
            Add the complete delivery address.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className={labelClass}>Address Line 1</label>

            <input
              name="addressLine1"
              placeholder="House number, street name"
              value={formData.addressLine1}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>
              Address Line 2
              <span className="ml-1 font-normal normal-case tracking-normal text-gray-400">
                (Optional)
              </span>
            </label>

            <input
              name="addressLine2"
              placeholder="Apartment, landmark, area"
              value={formData.addressLine2}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>City</label>

              <input
                name="city"
                placeholder="Mumbai"
                value={formData.city}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>State</label>

              <input
                name="state"
                placeholder="Maharashtra"
                value={formData.state}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Country</label>

              <input
                name="country"
                placeholder="India"
                value={formData.country}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Postal Code</label>

              <input
                name="postalCode"
                placeholder="400001"
                value={formData.postalCode}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}

      <div className="border-t border-gray-100 pt-6">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Address"}
        </Button>
      </div>
    </form>
  );
}

export default AddressForm;
