"use client";

import { CartItem } from "@/app/cart/page";
import React from "react";

interface AddressType {
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

interface WhatsAppRedirectProps {
  phoneNumber: string; // Your WhatsApp business number with country code
  products: CartItem[];
  address?: AddressType;
  additionalNotes?: string;
  children: React.ReactNode;
}

const WhatsAppRedirect: React.FC<WhatsAppRedirectProps> = ({
  phoneNumber,
  products,
  address,
  additionalNotes,
  children,
}) => {
  const handleRedirect = () => {
    // Format products information more concisely
    const productsText = products
      ?.map(
        (product) =>
          `• ${product?.product?.name} (x${product?.quantity}) - ₹${(
            product?.product?.salePrice * product?.quantity
          )?.toFixed(2)}`
      )
      .join("\n");

    // Calculate total price
    const totalPrice = products?.reduce(
      (sum, product) => sum + product?.product?.salePrice * product?.quantity,
      0
    );

    // Format address information more concisely
    const addressText = address
      ? `\n*Address:* ${address?.firstName} ${address?.lastName}, ${
          address?.address1
        }${address?.address2 ? ", " + address?.address2 : ""}, ${
          address?.city
        }, ${address?.state} ${address?.postalCode}, ${address?.country}, ${
          address?.phone
        }`
      : "";

    // Format additional notes if available (keep it brief)
    const notesText = additionalNotes ? `\n*Notes:* ${additionalNotes}` : "";

    // Combine all information in a more compact format
    const message = `*New Order*\n\n${productsText}\n\n*Total: ₹${totalPrice.toFixed(
      2
    )}*${addressText}${notesText}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return <div onClick={handleRedirect}>{children}</div>;
};

export default WhatsAppRedirect;
