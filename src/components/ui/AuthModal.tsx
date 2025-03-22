import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  quantity: number;
  productId: string;
}

export const AuthModal = ({
  isOpen,
  onClose,
  productName,
  quantity,
  productId,
}: CartModalProps) => {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem(
      "cartPendingAction",
      JSON.stringify({
        action: "addToCart",
        productName,
        productId,
        quantity,
      })
    );
    router.push("/login");
  };

  const handleRegister = () => {
    localStorage.setItem(
      "cartPendingAction",
      JSON.stringify({
        action: "addToCart",
        productName,
        productId,
        quantity,
      })
    );
    router.push("/register");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl p-6 w-full max-w-md z-10 shadow-xl relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#B73B45] mb-2">
                Sign in Required
              </h3>
              <p className="text-gray-600">
                Please sign in to add items to your cart
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleLogin}
                className="w-full bg-[#B73B45] text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Sign In
              </button>

              <button
                onClick={handleRegister}
                className="w-full bg-white border border-[#B73B45] text-[#B73B45] py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Create Account
              </button>

              <button onClick={onClose} className="w-full text-gray-500 py-2">
                Continue Browsing
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
