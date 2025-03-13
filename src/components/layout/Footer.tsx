import Link from "next/link";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   CreditCard,
//   Shield,
//   Truck,
// } from "lucide-react";
// import Image from "next/image";

export default function Footer() {
  // return (
  //   <footer className="bg-gray-900 text-white">
  //     {/* Newsletter Section */}
  //     <div className="border-b border-gray-800">
  //       <div className="container py-12">
  //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
  //           <div>
  //             <h2 className="text-2xl font-bold mb-2">Join our newsletter</h2>
  //             <p className="text-gray-400">
  //               Stay updated with our latest offers, products, and crystal
  //               wisdom
  //             </p>
  //           </div>
  //           <div>
  //             <form className="flex flex-col sm:flex-row gap-3">
  //               <input
  //                 type="email"
  //                 placeholder="Your email address"
  //                 className="flex-grow px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#B73B45]"
  //                 required
  //               />
  //               <button
  //                 type="submit"
  //                 className="px-6 py-3 bg-[#B73B45] rounded-md font-medium flex items-center justify-center transition-colors hover:bg-[#a02f3a]"
  //               >
  //                 Subscribe <ArrowRight size={16} className="ml-2" />
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Main Footer */}
  //     <div className="container py-16">
  //       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
  //         {/* Company Info */}
  //         <div>
  //           <Link href="/" className="flex items-center">
  //             <div className="relative h-8 md:h-8">
  //               <Image
  //                 src="/assets/logo.png"
  //                 alt="Cosmo Crystals"
  //                 width={128}
  //                 height={128}
  //                 className="h-full w-full object-cover"
  //               />
  //             </div>
  //           </Link>
  //           <p className="mt-4 text-gray-400">
  //             Discover the cosmic energy of premium crystals and
  //             crystal-inspired products for your mind, body, and soul.
  //           </p>
  //           <div className="flex space-x-4 pt-5">
  //             <a
  //               href="#"
  //               className="p-2 transition-colors rounded-full text-gray-400 hover:text-white hover:bg-[#B73B45]"
  //             >
  //               <Facebook size={20} />
  //             </a>
  //             <a
  //               href="#"
  //               className="p-2 transition-colors rounded-full text-gray-400 hover:text-white hover:bg-[#B73B45]"
  //             >
  //               <Twitter size={20} />
  //             </a>
  //             <a
  //               href="#"
  //               className="p-2 transition-colors rounded-full text-gray-400 hover:text-white hover:bg-[#B73B45]"
  //             >
  //               <Instagram size={20} />
  //             </a>
  //             <a
  //               href="#"
  //               className="p-2 transition-colors rounded-full text-gray-400 hover:text-white hover:bg-[#B73B45]"
  //             >
  //               <Youtube size={20} />
  //             </a>
  //           </div>
  //         </div>

  //         {/* Shop Links */}
  //         <div>
  //           <h3 className="mb-4 text-lg font-semibold">Shop</h3>
  //           <ul className="space-y-2">
  //             <li>
  //               <Link
  //                 href="/categories/clothing"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Clothing
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/categories/accessories"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Accessories
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/categories/footwear"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Footwear
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/categories/home-decor"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Home Decor
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/categories/sale"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Sale
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/new-arrivals"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 New Arrivals
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>

  //         {/* Company Links */}
  //         <div>
  //           <h3 className="mb-4 text-lg font-semibold">Company</h3>
  //           <ul className="space-y-2">
  //             <li>
  //               <Link
  //                 href="/about"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 About Us
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/contact"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Contact Us
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/faq"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 FAQ
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/privacy-policy"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Privacy Policy
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/terms-of-service"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Terms of Service
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 href="/shipping-policy"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 Shipping Policy
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>

  //         {/* Contact Info */}
  //         <div>
  //           <h3 className="mb-4 text-lg font-semibold">Contact</h3>
  //           <ul className="space-y-4">
  //             <li className="flex items-start">
  //               <MapPin
  //                 size={20}
  //                 className="flex-shrink-0 mr-2 text-[#B73B45]"
  //               />
  //               <span className="text-gray-400">
  //                 123 Crystal Way, New York, NY 10001, USA
  //               </span>
  //             </li>
  //             <li className="flex items-center">
  //               <Phone size={20} className="mr-2 text-[#B73B45]" />
  //               <a
  //                 href="tel:+1234567890"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 +1 (234) 567-890
  //               </a>
  //             </li>
  //             <li className="flex items-center">
  //               <Mail size={20} className="mr-2 text-[#B73B45]" />
  //               <a
  //                 href="mailto:info@cosmocrystals.com"
  //                 className="transition-colors text-gray-400 hover:text-white"
  //               >
  //                 info@cosmocrystals.com
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Trust Badges */}
  //     <div className="border-t border-gray-800 py-8">
  //       <div className="container">
  //         <div className="flex flex-wrap justify-center gap-8 items-center">
  //           <div className="flex items-center">
  //             <CreditCard className="mr-2 text-[#B73B45]" size={24} />
  //             <span className="text-gray-400">Secure Payment</span>
  //           </div>
  //           <div className="flex items-center">
  //             <Shield className="mr-2 text-[#B73B45]" size={24} />
  //             <span className="text-gray-400">Quality Guarantee</span>
  //           </div>
  //           <div className="flex items-center">
  //             <Truck className="mr-2 text-[#B73B45]" size={24} />
  //             <span className="text-gray-400">Fast Shipping</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Copyright */}
  //     <div className="py-6 text-center border-t border-gray-800">
  //       <div className="container">
  //         <p className="text-gray-500">
  //           © {new Date().getFullYear()} Cosmo Crystals. All rights reserved.
  //         </p>
  //       </div>
  //     </div>
  //   </footer>
  // );

  return (
    <footer className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © 2025 Cosmo Crystals. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-gray-500 hover:text-[#B73B45] transition-colors text-sm"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-[#B73B45] transition-colors text-sm"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-[#B73B45] transition-colors text-sm"
          >
            Shipping
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-[#B73B45] transition-colors text-sm"
          >
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="p-2 text-gray-500 hover:text-[#B73B45] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </Link>
          <Link
            href="#"
            className="p-2 text-gray-500 hover:text-[#B73B45] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
          <Link
            href="#"
            className="p-2 text-gray-500 hover:text-[#B73B45] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
