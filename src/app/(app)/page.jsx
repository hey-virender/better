"use client";

import FeedbackCarousel from "@/components/FeedbackCarousel";
import SuggestionsSection from "@/components/SuggestionsSection";
import { Star } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <section className="font-two   h-[140vh] relative bg-[#004733] flex flex-col justify-end">
        <div className="text-9xl w-2/3 text-center font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1ee07f] z-20">
          <div>Mortgages</div>
          <div>made Simple</div>
        </div>
        <div className="flex justify-around mb-20">
          <div className="text-center">
            <div className="text-center font-semibold px-12 py-5 rounded-full text-lg text-gray-900 bg-[#1ee07f]">
              Start my approval
            </div>
            <div className="text-white mt-3 text-md font-light">
              3 min | No credit impact
            </div>
          </div>
          <div>
            <div className="w-48">
              <img className="w-full h-full" src="/google.png" alt="" />
            </div>
            <div className="text-sm text-white mt-1">
              4.6 Stars | 3177 Google reviews
            </div>
          </div>
        </div>
        <div className="absolute w-96 bottom-0 left-1/2 -translate-x-1/2 z-10">
          <img className="w-full h-full" src="/background.webp" alt="" />
        </div>
      </section>
      <section className="flex justify-between mt-20 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40">
        <div>
          <FeedbackCarousel />
        </div>
        <div className="flex-2 w-2/4 text-black relative flex flex-col justify-center ">
          <div className="text-8xl font-semibold text-[#292b29]">
            Find out why we're better.
          </div>
          <div className="w-3/4 mt-9 ml-3">
            <div className="bg-[#017848] w-60 text-center py-4 text-white text-lg rounded-full ">
              See all our stories
            </div>
            <div className="flex text-[#565d5a] mt-7">
              <Star className="text-[#23ad7a] fill-[#23ad7a]" />
              <span className="font-semibold text-black"> Trustpilot </span>
              &nbsp; Excellent &nbsp;
              <span className="font-semibold">4.3</span> &nbsp; out of 5
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40">
        <SuggestionsSection />
      </section>
    </div>
  );
};

export default Home;
