"use client";

import IProducts from "@/types/type";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { client } from "@/sanity/lib/client";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      const validatedCart = parsedCart.map((item: IProducts) => ({
        ...item,
        quantity: item.quantity && !isNaN(item.quantity) ? item.quantity : 1,
      }));
      setCartItems(validatedCart);
    }

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      localStorage.removeItem("cart");
      toast.success("Order placed successfully!");

      const orderData = {
        _type: "order",
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        email: formValues.email,
        cartItems: cartItems.map((item) => ({
          _type: "reference",
          _ref: item._id,
        })),
        total: total,
        discount: discount,
        orderDate: new Date().toISOString(),
      };

      try {
        await client.create(orderData);
      } catch (error) {
        console.log("Error in creating order", error);
        toast.error("Something went wrong with your order. Please try again.");
      }
    } else {
      toast.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-4 text-gray-600 text-sm">
          <Link href="/Cart" className="hover:text-black transition">
            Cart
          </Link>
          <CgChevronRight className="w-4 h-4 text-gray-500" />
          <span className="font-medium">Checkout</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4 py-4 border-b">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.productName}</h3>
                  <p className="text-xs text-gray-500">Quantity: {item.quantity || 1}</p>
                  <p className="text-xs text-gray-500">Price: ₹{item.price}</p>
                </div>
                <p className="text-sm font-medium">₹{item.price * (item.quantity || 1)}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          <div className="text-right pt-4">
            <p className="text-sm">Subtotal: <span className="font-medium">₹{subtotal.toFixed(2)}</span></p>
            <p className="text-sm text-red-500">Discount: <span className="font-medium">-₹{discount.toFixed(2)}</span></p>
            <p className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-lg border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            {Object.keys(formValues).map((field) => (
              <div key={field} className="mb-4">
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-600"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  type="text"
                  value={formValues[field as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md mt-2 ₹{
                    formErrors[field as keyof typeof formErrors] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors[field as keyof typeof formErrors] && (
                  <p className="text-xs text-red-500">This field is required.</p>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
