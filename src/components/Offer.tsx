import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

type OfferItem = {
  title: string;
  desc: string;
};

const offers: OfferItem[] = [
  {
    title: "1 month free resource to support on",
    desc:
      "Business development, operational support, tech projects, fundraising, etc.",
  },
  {
    title:
      "Lifetime access to our candidates database and community",
    desc:
      "All resources vetted through our selective process and internal Accelerator.",
  },
  {
    title: "20% discount on",
    desc: "Our bespoke services and business trips.",
  },
  {
    title: "Free access to",
    desc: "Our fundraising matchmaking platform.",
  },
  {
    title: "Free registration of your company in",
    desc:
      "Our global database accessible to potential buyers and partners.",
  },
];

const Offer: React.FC = () => {
  return (
    <section
      id="offer"
      className="relative py-24 text-white bg-gradient-to-br from-primary-blue to-cyan-500"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            What <span className="text-white/90">EDGE</span> offers
          </p>
          <div className="mt-4 h-1 w-28 bg-white/70 rounded-full" />
          <p className="mt-6 text-lg sm:text-xl text-white/90">
            Partnering with EDGE gives your startup more than extra hands.
            It’s a pipeline of emerging global leaders trained to deliver
            impact from day one.
          </p>
        </header>

        {/* Offers */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white text-black p-6 shadow-sm border border-white/20"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1">
                  <IconCircleCheckFilled size={28} className="text-primary-blue" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-1 text-neutral-700">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft top-right accent to echo brochure shapes */}
      <div className="pointer-events-none absolute -top-16 right-0 w-64 h-64 rounded-b-[3rem] bg-white/10" />
    </section>
  );
};

export default Offer;