"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useState } from "react";

const SuggestionsSection = () => {
  const products = {
    section1: {
      heading: "Buying your first home with Better",
      info: "",
      imageUrl: "/services_images/products1.webp",
    },
    section2: {
      heading: "One day Mortgage <sup>1</sup>",
      info: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
      imageUrl: "/services_images/products2.webp",
    },
    section3: {
      heading: "Better HELOC",
      info: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup>",
      imageUrl: "/services_images/products3.webp",
    },
    section4: {
      heading: "Insurance",
      info: "",
      imageUrl: "/services_images/products4.webp",
    },
  };

  const calculators = {
    section1: {
      heading: "Mortgage calculator",
      info: "",
      imageUrl: "/services_images/calculators1.webp",
    },
    section2: {
      heading: "Affordability calculator",
      info: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford,",
      imageUrl: "/services_images/calculators2.webp",
    },
    section3: {
      heading: "HELOC calculator",
      info: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
      imageUrl: "/services_images/calculators3.webp",
    },
    section4: {
      heading: "Fixed-rate loan comparison calculator",
      info: "",
      imageUrl: "/services_images/calculators4.webp",
    },
  };

  const guides = {
    section1: {
      heading: "What is good debt-to-income ratio for a home loan?",
      info: "",
      imageUrl: "/services_images/guides1.webp",
    },
    section2: {
      heading: "Buying a house without realtor",
      info: "Thinking about buying a house without a real estate agent? Read this first.",
      imageUrl: "/services_images/guides2.webp",
    },
    section3: {
      heading: "Timeline for homebuying process",
      info: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
      imageUrl: "/services_images/guides3.webp",
    },
    section4: {
      heading: "Conventional loan requirements",
      info: "",
      imageUrl: "/services_images/guides4.webp",
    },
  };
  const sections = [
    {
      key: "products",
      value: "Our products",
      link: products,
    },
    {
      key: "calculators",
      value: "Calculators",
      link: calculators,
    },
    {
      key: "guides",
      value: "Guides & FAQs",
      link: guides,
    },
  ];
  const [currentSection, setCurrentSection] = useState(products);
  const [currSectionName, setCurrSectionName] = useState("products");

  const renderArrow = () => {
    return (
      <div className="h-12 w-12 border-[0.01vw] border-black rounded-full flex items-center justify-center ">
        <ArrowRight className="h-7 w-7" />
      </div>
    );
  };

  return (
    <div className="px-20">
      <div className="flex justify-between items-end">
        <div className="text-5xl font-medium">
          <div>Got questions?</div>
          <div>We've got answers</div>
        </div>
        <div className="flex gap-10">
          {sections.map((section) => (
            <div
              className={`h-12 w-44 font-semibold capitalize border-[0.1vh] ${
                section.key == currSectionName
                  ? "border-4 border-[#017848] text-[#017848]"
                  : "text-black border-black"
              } rounded-full px-5 py-2 hover:border-[#017848] hover:border-4 hover:text-[#017848] transition-all duration-150 flex text-center justify-center items-center`}
              onClick={() => {
                setCurrentSection(section.link);
                setCurrSectionName(section.key);
              }}
            >
              {section.value}
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-96 gap-10 text-[#073126] mt-8">
        <div className=" basis-2/5 bg-[#f0f7f1] px-8 py-5 rounded-xl">
          <h1 className="text-2xl font-semibold mb-4">
            {currentSection.section1.heading}
          </h1>
          {renderArrow()}
          <div className="mt-4">
            <img
              className="h-full w-full rounded-md object-cover"
              src={currentSection.section1.imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="flex bg-[#f0f7f1] basis-3/4 px-8 py-5 rounded-xl gap-2">
          <div className="basis-3/4">
            <h1
              className="text-2xl font-semibold"
              dangerouslySetInnerHTML={{
                __html: currentSection.section2.heading,
              }}
            >
              {}
            </h1>
            <p className="text-md mt-3 mb-4">{currentSection.section2.info}</p>
            {renderArrow()}
          </div>
          <div className="basis-2/4">
            <img
              className="h-full w-full  rounded-lg object-cover"
              src={currentSection.section2.imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex h-80 gap-10 text-[#073126] mt-10 ">
        <div className="flex basis-3/4 gap-4 bg-[#f0f7f1] px-8 py-5 rounded-xl">
          <div className="h-full basis-3/4">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={currentSection.section3.imageUrl}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              {currentSection.section3.heading}
            </h1>
            <p
              className="my-4"
              dangerouslySetInnerHTML={{ __html: currentSection.section3.info }}
            ></p>
            {renderArrow()}
          </div>
        </div>
        <div className=" bg-[#f0f7f1] basis-2/5 rounded-xl px-8 py-5">
          <h1 className="text-2xl font-semibold mb-3">
            {currentSection.section4.heading}
          </h1>
          {renderArrow()}
          <div className="h-44 mt-4">
            <img
              className="h-full w-full rounded-xl object-contain"
              src={currentSection.section4.imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsSection;
