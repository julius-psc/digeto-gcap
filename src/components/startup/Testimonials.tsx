import React from "react";

type Testimonial = {
  category: string;
  quote: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    category: "Funding Success",
    quote:
      "Digeto helped us transform our pitch and financial models, which led to us securing our seed round. Their dedicated financial analyst and business development specialist were invaluable in making our funding goals a reality.",
    author: "Ludovic Vincent",
    role: "Co-founder & CEO, Biomede (France)",
  },
  {
    category: "International Expansion",
    quote:
      "Expanding into Europe was a huge step, and Digeto was an invaluable partner. They provided a fractional Head of International Growth who helped us with our market strategy, and their legal and talent teams enabled us to successfully launch in France. Their expertise made our global ambitions a reality.",
    author: "Ludovic Descouens",
    role: "Founder & CEO of Taktime (Switzerland)",
  },
  {
    category: "Strategic Partnerships",
    quote:
      "We needed help with business development and forging partnerships. Their growth consultant became an extension of our team, helping us build relationships that led to a strategic partnership with a major corporation. This partnership validated our product and opened a massive new channel for growth.",
    author: "Phil Phalla",
    role: "CEO, Basil FoodTech (USA)",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl mb-12">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-black">
            Why Companies Choose <span className="text-primary-blue">EDGE</span>
          </h2>
          <div className="mt-3 h-1 w-28 bg-neutral-200 rounded-full" />
          <p className="mt-6 text-lg text-neutral-800">
            Hear directly from our startup partners on how EDGE talent{" "}
            <span className="font-semibold">delivered real impact</span> and{" "}
            <span className="font-semibold">supported their growth</span>.
          </p>
        </header>

        {/* Testimonials list */}
        <div className="space-y-16">
          {testimonials.map((t) => (
            <div key={t.category} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-blue">
                {t.category}
              </h3>
              <blockquote className="text-neutral-700 italic text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <p className="font-semibold text-black">{t.author}</p>
              <p className="text-neutral-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
