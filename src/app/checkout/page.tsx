"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/hooks/queries/useCart";
import { Product } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import { useCountries } from "@/hooks/queries/useCountries";
import WhatsAppRedirect from "@/components/home/WhatsappRedirect";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  product: Product;
  quantity: number;
  image: string;
}

interface Address {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
}

interface Country {
  name: string;
  code?: string;
  iso2?: string;
  iso3?: string;
}

interface State {
  name: string;
  code: string;
}

export default function Checkout() {
  const { data, isLoading } = useCart();
  const { data: countryData, isLoading: countryLoading } = useCountries();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggeredContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Form states
  const [address, setAddress] = useState<Address>({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    phone: "",
  });

  const [step, setStep] = useState(1); // 1: Info, 2: Shipping, 3: Payment, 4: Review
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  // Location data states
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);

  const subtotal = data?.reduce(
    (sum: number, item: CartItem) =>
      sum + item?.product?.price * item?.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 99;
  const total = subtotal + shipping;

  useEffect(() => {
    if (countryData && countryData.data && Array.isArray(countryData.data)) {
      const formattedCountries = countryData.data.map((country: Country) => ({
        name: country.name,
        iso2: country.iso2,
        iso3: country.iso3,
      }));

      // Sort countries alphabetically by name
      formattedCountries.sort((a: Country, b: Country) =>
        a.name.localeCompare(b.name)
      );

      setCountries(formattedCountries);
    } else {
      // Fallback for development or if API fails
      setCountries([
        { name: "United States", iso2: "US" },
        { name: "Canada", iso2: "CA" },
        { name: "United Kingdom", iso2: "GB" },
        { name: "Australia", iso2: "AU" },
        { name: "India", iso2: "IN" },
        { name: "Germany", iso2: "DE" },
        { name: "France", iso2: "FR" },
      ]);
    }
  }, [countryData]);

  useEffect(() => {
    const fetchStates = async () => {
      if (!address.country) {
        setStates([]);
        return;
      }

      try {
        // Find the selected country object
        const selectedCountry = countryData?.data?.find(
          (c: Country) => c.name === address.country
        );

        if (!selectedCountry) {
          setStates([]);
          return;
        }

        // Access the states directly from the selected country
        const stateData =
          selectedCountry.states?.map(
            (state: { name: string; state_code: string }) => ({
              name: state.name,
              code: state.state_code,
            })
          ) || [];

        // Sort states alphabetically by name
        stateData.sort((a: State, b: State) => a.name.localeCompare(b.name));

        setStates(stateData);
      } catch (error) {
        console.error("Error processing states:", error);
        setStates([]);
      }
    };

    if (address.country && countryData?.data?.length > 0) {
      fetchStates();
    }
  }, [address.country, countryData]);

  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);

      // Auto-hide order summary on mobile, show on desktop
      setShowOrderSummary(window.innerWidth >= 768);
    };

    // Initial check on component mount
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Validate form
  const validateForm = () => {
    const newErrors: ValidationErrors = {};

    if (!address.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!address.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!address.address1.trim()) {
      newErrors.address1 = "Address is required";
    }

    if (!address.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!address.state.trim()) {
      newErrors.state = "State/Province/Region is required";
    }

    if (!address.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }

    if (!address.country) {
      newErrors.country = "Country is required";
    }

    if (!address.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\-\s]+$/.test(address.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form changes
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // If country changes, reset state
    if (name === "country" && value !== address.country) {
      setAddress((prev) => ({
        ...prev,
        [name]: value,
        state: "", // Reset state when country changes
      }));
    } else {
      setAddress((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear the error for this field when user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Format phone number with international support
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Allow +, numbers, spaces, and hyphens
    value = value.replace(/[^\d\s\-+]/g, "");

    setAddress((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  // API call to save the address
  const saveAddressToAPI = async () => {
    try {
      setSubmitting(true);
      // Mock API call - in a real app you would call your API here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulating a successful API response
      return true;
    } catch (error) {
      console.error("Error saving address:", error);
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      const isValid = validateForm();

      if (isValid) {
        const success = await saveAddressToAPI();
        if (success) {
          setStep(2);
          // On mobile, show the order summary when moving to confirmation step
          if (isMobile) {
            setShowOrderSummary(true);
          }
        }
      }
    } else {
      // Final submission
      setSubmitting(true);
      // Simulate API call for placing the order
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitting(false);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Toggle order summary visibility (for mobile)
  const toggleOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };

  return (
    <div className="bg-[#F7F3F4]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-6 sm:mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-[#B73B45] hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to shopping
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
            Checkout
          </h1>
        </motion.div>

        {/* Mobile order summary toggle */}
        {/* {isMobile && (
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-6"
          >
            <button
              onClick={toggleOrderSummary}
              className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <span className="font-medium text-gray-900">
                Order Summary ({data?.length || 0} items)
              </span>
              <div className="flex items-center">
                <span className="font-bold text-[#B73B45] mr-2">
                  ₹{total?.toFixed(2)}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${
                    showOrderSummary ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </motion.div>
        )} */}

        <div className="md:grid md:grid-cols-3 gap-6 md:gap-8 flex flex-col-reverse">
          {/* Left column - Address form */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={slideUp}
            className="md:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 lg:p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggeredContainer}
                    className="space-y-5 md:space-y-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Contact Information
                    </h2>
                    <motion.div
                      variants={slideUp}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name <span className="text-[#B73B45]">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={address.firstName}
                          onChange={handleAddressChange}
                          className={`w-full px-3 py-2 border ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name <span className="text-[#B73B45]">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={address.lastName}
                          onChange={handleAddressChange}
                          className={`w-full px-3 py-2 border ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <label
                        htmlFor="address1"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Address <span className="text-[#B73B45]">*</span>
                      </label>
                      <input
                        type="text"
                        id="address1"
                        name="address1"
                        required
                        value={address.address1}
                        onChange={handleAddressChange}
                        className={`w-full px-3 py-2 border ${
                          errors.address1 ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none`}
                      />
                      {errors.address1 && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.address1}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <label
                        htmlFor="address2"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Apartment, suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        id="address2"
                        name="address2"
                        value={address.address2}
                        onChange={handleAddressChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                      />
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country <span className="text-[#B73B45]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="country"
                          name="country"
                          required
                          value={address.country}
                          onChange={handleAddressChange}
                          disabled={countryLoading}
                          className={`w-full px-3 py-2 border ${
                            errors.country
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none bg-white appearance-none pr-10`}
                        >
                          <option value="">Select Country</option>
                          {countries?.map((country: Country, index: number) => (
                            <option key={index} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          {countryLoading ? (
                            <svg
                              className="animate-spin h-5 w-5 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      {errors.country && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.country}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={slideUp}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          State/Province/Region{" "}
                          <span className="text-[#B73B45]">*</span>
                        </label>
                        <div className="relative">
                          {states.length > 0 ? (
                            <>
                              <select
                                id="state"
                                name="state"
                                required
                                value={address.state}
                                onChange={handleAddressChange}
                                disabled={countryLoading}
                                className={`w-full px-3 py-2 border ${
                                  errors.state
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none bg-white appearance-none pr-10`}
                              >
                                <option value="">Select State</option>
                                {states.map((state) => (
                                  <option key={state.code} value={state.name}>
                                    {state.name}
                                  </option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                {countryLoading ? (
                                  <svg
                                    className="animate-spin h-5 w-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                ) : (
                                  <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                              </div>
                            </>
                          ) : (
                            <input
                              type="text"
                              id="state"
                              name="state"
                              required
                              value={address.state}
                              onChange={handleAddressChange}
                              placeholder={
                                countryLoading
                                  ? "Loading..."
                                  : "Enter state/province"
                              }
                              disabled={countryLoading}
                              className={`w-full px-3 py-2 border ${
                                errors.state
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none ${
                                countryLoading ? "bg-gray-100" : "bg-white"
                              }`}
                            />
                          )}
                        </div>
                        {errors.state && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.state}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City <span className="text-[#B73B45]">*</span>
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={address.city}
                          onChange={handleAddressChange}
                          className={`w-full px-3 py-2 border ${
                            errors.city ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none`}
                        />
                        {errors.city && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.city}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideUp}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <label
                          htmlFor="postalCode"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Postal/ZIP Code{" "}
                          <span className="text-[#B73B45]">*</span>
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          required
                          value={address.postalCode}
                          onChange={handleAddressChange}
                          className={`w-full px-3 py-2 border ${
                            errors.postalCode
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none`}
                        />
                        {errors.postalCode && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.postalCode}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone <span className="text-[#B73B45]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={address.phone}
                          onChange={handlePhoneChange}
                          placeholder="e.g. +1 555-123-4567"
                          className={`w-full px-3 py-2 border ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggeredContainer}
                    className="space-y-5 md:space-y-6"
                  >
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                      Order Review
                    </h2>
                    <motion.div variants={slideUp}>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Shipping Address
                      </h3>
                      <p className="text-gray-700">
                        {address.firstName} {address.lastName}
                        <br />
                        {address.address1}
                        {address.address2 && <>, {address.address2}</>}
                        <br />
                        {address.city}, {address.state} {address.postalCode}
                        <br />
                        {address.country}
                        <br />
                        {address.phone}
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                <div className="mt-6 sm:mt-8 flex flex-row items-center justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="text-[#B73B45] font-medium mb-0 sm:mb-0"
                    >
                      Back
                    </button>
                  )}
                  {step !== 2 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="bg-[#B73B45] text-white px-8 py-3 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg transition-all"
                    >
                      Continue
                    </motion.button>
                  )}
                  {step == 2 && (
                    <WhatsAppRedirect
                      phoneNumber="+917899721079"
                      products={data}
                      address={address}
                      // additionalNotes={notes}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={submitting}
                        className="bg-[#B73B45] text-white px-8 py-3 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg transition-all"
                      >
                        Place Order
                      </motion.button>
                    </WhatsAppRedirect>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right column - Order summary */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={slideUp}
          >
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Summary{" "}
                <span className="font-medium text-gray-900">
                  ({data?.length || 0} items)
                </span>
              </h2>

              {isLoading ? (
                ""
              ) : (
                <div className="space-y-4 mb-4">
                  {data?.map((item: CartItem) => (
                    <Link
                      href={`/product/${item?.product?.id}`}
                      key={item?.id}
                      className="flex items-center space-x-4"
                    >
                      <div className="h-16 w-16 overflow-hidden bg-[#F0E6E8] rounded-lg flex-shrink-0 relative">
                        <Image
                          src={
                            item?.product?.images
                              ?.map((img) =>
                                img?.isMain ? img?.url : undefined
                              )
                              .filter((url) => url !== undefined)[0] ||
                            item?.product?.images[0]?.url
                          }
                          alt="Product Image"
                          fill
                          className="object-cover w-16 h-16"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {item?.product?.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item?.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ₹
                        {(item?.product?.salePrice * item?.quantity)?.toFixed(
                          2
                        )}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {isLoading ? (
                ""
              ) : (
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-sm font-medium">
                      ₹{subtotal?.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Shipping</span>
                    <span className="text-sm font-medium">
                      ₹{shipping?.toFixed(2)}
                    </span>
                  </div>
                  {/* <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tax</span>
                  <span className="text-sm font-medium">
                    ₹{tax?.toFixed(2)}
                  </span>
                </div> */}
                </div>
              )}

              {isLoading ? (
                ""
              ) : (
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-900">
                      Total
                    </span>
                    <span className="text-base font-bold text-[#B73B45]">
                      ₹{total?.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
