import React from "react";
import { useState } from "react";

const FeedbackCarousel = () => {
  const [customerName, setCustomerName] = useState("arian");
  const customers = ["arian", "amanda", "paul"];
  return (
    <div className="w-96 h-1/2 p-4">
      <div className="overflow-hidden rounded-lg">
        <img src={`/carousel_images/${customerName}.webp`} alt={customerName} />
      </div>
      <div className="flex justify-between h-12 px-2 min-w-full max-w-full mt-2">
        {customers.map((customer) => (
          <div>
            <div
              className={`h-12 w-24 font-semibold capitalize border-[0.1vh] ${
                customer == customerName
                  ? "border-4 border-[#017848] text-[#017848]"
                  : "text-black border-black"
              } rounded-full px-5 py-2 hover:border-[#017848] hover:border-4 hover:text-[#017848] transition-all duration-150 flex text-center justify-center items-center`}
              onClick={() => setCustomerName(customer)}
            >
              {customer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
