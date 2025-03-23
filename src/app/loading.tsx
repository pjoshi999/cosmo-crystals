import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-[80vh] bg-[#F7F3F4] flex items-center justify-center">
      <Image src="/assets/logo4.png" alt="" width={150} height={150} />
    </div>
  );
};

export default loading;
