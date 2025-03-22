import React, { useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/types";
import Image from "next/image";

const ProductCard: React.FC<{ product?: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  // Default product in case none is provided
  const defaultProduct = {
    id: "1",
    name: "Premium Leather Wallet",
    description:
      "Handcrafted genuine leather wallet with multiple compartments",
    price: 79.99,
    salePrice: 59.99,
    images: [
      {
        url: "/api/placeholder/400/500",
        isMain: true,
        alt: "Leather wallet front",
      },
      {
        url: "/api/placeholder/400/500",
        isMain: false,
        alt: "Leather wallet back",
      },
    ],
    stock: 15,
    category: { name: "Accessories" },
  };

  const productData = product || defaultProduct;
  const mainImage =
    productData.images?.find((img) => img.isMain)?.url ||
    productData.images?.[0]?.url ||
    "/api/placeholder/400/500";
  const hasDiscount = productData.salePrice < productData.price;

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("Added to cart:", productData.id);
    // Here you would add your cart logic
  };

  const quickView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("Quick view:", productData.id);
    // Here you would trigger your quick view modal
  };

  return (
    <div
      className="group relative w-64 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Badge */}
      {hasDiscount && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {Math.round(
            ((productData.price - productData.salePrice) / productData.price) *
              100
          )}
          % OFF
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 ${
          isFavorited ? "text-red-500" : "text-gray-400 hover:text-red-500"
        }`}
      >
        <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
      </button>

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={mainImage}
          alt={productData.name}
          fill
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Action Buttons - Appear on Hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4 bg-gradient-to-t from-black/70 to-transparent transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={quickView}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Eye className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={addToCart}
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">
          {productData.category?.name}
        </p>
        <h3 className="font-medium text-gray-900 mb-2 truncate">
          {productData.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="font-bold text-lg">
                  ₹{productData.salePrice.toFixed(2)}
                </span>
                <span className="text-gray-500 text-sm line-through">
                  ₹{productData.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-bold text-lg">
                ₹{productData.price.toFixed(2)}
              </span>
            )}
          </div>

          <span
            className={`text-sm ${
              productData.stock > 5
                ? "text-green-600"
                : productData.stock > 0
                ? "text-orange-500"
                : "text-red-500"
            }`}
          >
            {productData.stock > 5
              ? "In Stock"
              : productData.stock > 0
              ? "Low Stock"
              : "Sold Out"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
