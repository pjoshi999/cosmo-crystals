"use client";
import { useState } from "react";
import { Search, Package, Truck, CheckCircle } from "lucide-react";

interface OrderEvent {
  status: string;
  description: string;
  createdAt: string;
}

interface OrderStatus {
  id: string;
  status: string;
  events: OrderEvent[];
  estimatedDelivery: string;
}

export default function OrderTracker() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock function - would be replaced with actual API call
  const handleTrackOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Mock API response - replace with actual fetch
      setTimeout(() => {
        // Sample response based on your schema
        if (trackingNumber.trim()) {
          const mockOrderStatus: OrderStatus = {
            id: "order-123",
            status: "SHIPPED",
            events: [
              {
                status: "PENDING",
                description: "Order received",
                createdAt: "2023-03-01T12:00:00Z",
              },
              {
                status: "PROCESSING",
                description: "Payment confirmed",
                createdAt: "2023-03-01T14:30:00Z",
              },
              {
                status: "SHIPPED",
                description: "Package shipped via Express",
                createdAt: "2023-03-02T09:15:00Z",
              },
            ],
            estimatedDelivery: "2023-03-05",
          };
          setOrderStatus(mockOrderStatus);
        } else {
          setError("Please enter a valid tracking number");
        }
        setLoading(false);
      }, 1000);
    } catch {
      setError("Failed to track order. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Track Your Order</h2>
          <p className="text-gray-600">
            Enter your order number to check the current status
          </p>
        </div>

        <form
          onSubmit={handleTrackOrder}
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-10"
        >
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Enter order or tracking number"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B73B45] focus:border-transparent"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#B73B45] text-white rounded-md font-medium hover:bg-[#a02f3a] transition-colors disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Tracking..." : "Track Order"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mb-6">{error}</p>}

        {orderStatus && (
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-lg font-semibold">
                  Order #{orderStatus.id}
                </h3>
                <p className="text-gray-500">
                  Estimated delivery:{" "}
                  {new Date(orderStatus.estimatedDelivery).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium">
                {orderStatus.status}
              </div>
            </div>

            <div className="relative">
              {/* Progress bar */}
              <div className="h-1 bg-gray-200 absolute top-8 left-0 right-0 z-0">
                <div
                  className="h-full bg-[#B73B45]"
                  style={{
                    width:
                      orderStatus.status === "PENDING"
                        ? "0%"
                        : orderStatus.status === "PROCESSING"
                        ? "33%"
                        : orderStatus.status === "SHIPPED"
                        ? "66%"
                        : orderStatus.status === "DELIVERED"
                        ? "100%"
                        : "0%",
                  }}
                ></div>
              </div>

              {/* Status points */}
              <div className="flex justify-between relative z-10">
                <div className="text-center flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                      [
                        "PENDING",
                        "PROCESSING",
                        "SHIPPED",
                        "DELIVERED",
                      ].includes(orderStatus.status)
                        ? "bg-[#B73B45] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <Package size={14} />
                  </div>
                  <span className="text-sm font-medium">Order Placed</span>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                      ["PROCESSING", "SHIPPED", "DELIVERED"].includes(
                        orderStatus.status
                      )
                        ? "bg-[#B73B45] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <Package size={14} />
                  </div>
                  <span className="text-sm font-medium">Processing</span>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                      ["SHIPPED", "DELIVERED"].includes(orderStatus.status)
                        ? "bg-[#B73B45] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <Truck size={14} />
                  </div>
                  <span className="text-sm font-medium">Shipped</span>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                      orderStatus.status === "DELIVERED"
                        ? "bg-[#B73B45] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-sm font-medium">Delivered</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium mb-3">Order Activity</h4>
              <div className="space-y-4">
                {orderStatus.events.map((event, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 relative">
                      <div className="w-3 h-3 rounded-full bg-[#B73B45]"></div>
                      {index < orderStatus.events.length - 1 && (
                        <div className="absolute top-3 bottom-0 left-1.5 w-0.5 -ml-px bg-gray-200 h-full"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex justify-between items-start">
                        <p className="font-medium">{event.description}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(event.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">{event.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
