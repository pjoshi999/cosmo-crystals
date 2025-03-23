export const pageMetadata = {
  about: {
    title: "About Us – Cosmo Crystals",
    description:
      "Learn about Cosmo Crystals, your trusted source for spiritual and healing stones. Discover our journey and commitment to providing authentic gemstones.",
  },
  profile: {
    title: "Your Profile – Cosmo Crystals",
    description:
      "Manage your account, orders, and wishlist at Cosmo Crystals. Update your details and explore personalized recommendations.",
  },
  signin: {
    title: "Sign In to Cosmo Crystals",
    description:
      "Access your Cosmo Crystals account to track orders, manage your wishlist, and explore spiritual products.",
  },
  signup: {
    title: "Create an Account – Cosmo Crystals",
    description:
      "Join Cosmo Crystals today! Sign up for an account to shop spiritual and healing crystals, track orders, and receive exclusive offers.",
  },
  category: {
    title: "Shop by Category – Cosmo Crystals",
    description:
      "Browse our collection of spiritual crystals by category. Find the perfect gemstone for healing, meditation, and positive energy.",
  },
  categorySlug: (slug: string) => ({
    title: `${slug.replace("-", " ")} Crystals – Cosmo Crystals`,
    description: `Explore our collection of ${slug.replace(
      "-",
      " "
    )} crystals. Shop high-quality healing stones and energy-balancing gemstones.`,
  }),
  productDetail: (productName: string) => ({
    title: `${productName} – Cosmo Crystals`,
    description: `Buy ${productName} online at Cosmo Crystals. A high-quality healing crystal perfect for spiritual growth and energy balancing.`,
  }),
  cart: {
    title: "Your Shopping Cart – Cosmo Crystals",
    description:
      "View and manage your shopping cart at Cosmo Crystals. Secure checkout and fast shipping for all spiritual and healing crystals.",
  },
  checkout: {
    title: "Checkout – Cosmo Crystals",
    description:
      "Securely complete your purchase at Cosmo Crystals. Enjoy a seamless checkout process for spiritual and healing crystals.",
  },
  forgotPassword: {
    title: "Forgot Password – Cosmo Crystals",
    description:
      "Reset your password for Cosmo Crystals. Secure your account and regain access to your spiritual and healing crystal orders.",
  },
  resetPassword: {
    title: "Reset Password – Cosmo Crystals",
    description:
      "Create a new password for your Cosmo Crystals account. Secure access to your spiritual product purchases and order history.",
  },
};
