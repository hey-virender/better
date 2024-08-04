import React from "react";

const Footer = () => {
  return (
    <div className="m-auto px-6 py-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40">
      <div class="mt-12 flex gap-x-4 md:mt-60">
        <div>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/better/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#313131"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-facebook "
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/betterdotcom/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#313131"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram "
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <div>
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/betterdotcom/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#313131"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin "
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-12">
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
          <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers
          qualified customers who provide certain required financial
          information/documentation to Better Mortgage within 4 hours of locking
          a rate on a mortgage loan the opportunity to receive an underwriting
          determination from Better Mortgage within 24 hours of their rate lock.
          The underwriting determination is subject to customary terms,
          including fraud and anti-money laundering checks, that take place
          pre-closing and which may trigger additional required documentation
          from the customer. Better Mortgage does not guarantee that initial
          underwriting approval will result in a final underwriting approval.
          See{" "}
          <a
            class="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit"
            href="/with/one-day-mortgage-terms"
          >
            One Day Mortgage™ Terms and Conditions.
          </a>
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
          <sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers
          qualified customers who provide certain required financial
          information/documentation to Better Mortgage within 4 hours of locking
          a rate on a HELOC loan the opportunity to receive an underwriting
          determination from Better Mortgage within 24 hours of their rate lock.
          The underwriting determination is subject to customary terms,
          including fraud and anti-money laundering checks, that take place
          pre-closing and which may trigger additional required documentation
          from the customer. Better Mortgage does not guarantee that initial
          underwriting approval will result in final underwriting approval. See{" "}
          <a
            class="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit"
            href="/b/better-mortgage-one-day-heloc-promotion-terms-and-conditions"
          >
            One Day Heloc™ Terms and Conditions.
          </a>
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
          <sup>3</sup>Assumes borrowers are eligible for the Automated Valuation
          Model (AVM) to calculate their home value, their loan amount is less
          than $400,000, all required documents are uploaded to their Better
          Mortgage online account within 24 hours of application, closing is
          scheduled for the earliest available date and time, and a notary is
          readily available. Funding timelines may vary and may be longer if an
          appraisal is required to calculate a borrower’s home value.
        </p>
        <hr class="my-xl border-strokeBorder" />
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
          © 2024 Better Home &amp; Finance Holding Company and/or its
          affiliates. Better is a family of companies. Better Mortgage
          Corporation provides home loans; Better Real Estate, LLC and Better
          Real Estate California Inc License # 02164055 provides real estate
          services; Better Cover, LLC sells insurance products; and Better
          Settlement Services provides title insurance services; and Better
          Inspect, LLC provides home inspection services. All rights reserved.
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade
          Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans
          made or arranged pursuant to a California Finance Lenders Law License.
          Not available in all states. Equal Housing Lender.{" "}
          <a
            class="underline"
            data-qa="nmls-link"
            href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511"
          >
            NMLS Consumer Access
          </a>
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s{" "}
          <a class="underline" href="/with/better-realestate-license">
            license numbers
          </a>
          . Better Real Estate, LLC provides access to real estate brokerage
          services via its nationwide network of partner brokerages and real
          estate agents (“Better Real Estate Partner Agents”). Equal Housing
          Opportunity. All rights reserved.
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          <a
            class="underline"
            href="https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf"
          >
            New York State Fair Housing Notice
          </a>
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          <a
            class="underline"
            href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf"
          >
            New York Standard Operating Procedures
          </a>
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Texas Real Estate Commission:{" "}
          <a
            class="underline"
            href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&amp;cid=645736"
          >
            Information About Brokerage Services
          </a>{" "}
          |{" "}
          <a
            class="underline"
            href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf"
          >
            Consumer Protection Notice
          </a>
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency. License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Insurance quotes and policies are offered through Better Cover, LLC. A
          Pennsylvania Resident Producer Agency. License #881593. Here is a full
          listing of Better Cover, LLC’s{" "}
          <a class="underline" href="https://www.bettercover.com/licenses">
            license numbers
          </a>
          .
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home
          &amp; Finance Holding Company. Each company is a separate legal entity
          operated and managed through its own management and governance
          structure as required by its state of incorporation, and applicable
          and legal and regulatory requirements. Products not available in all
          states.
        </p>
        <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &amp;
          Finance Holding Company. Better Home &amp; Finance Holding Company
          trademarks are federally registered with the U. S. Patent and
          Trademark Office. Better Cover is a registered trademark with the U.S.
          Patent and Trademark Office and is owned by Better Cover, LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
