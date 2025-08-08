import React from "react";

const testimonials = [
  {
    quote:
      "EDGE pushed me to think strategically, solve real business challenges, and present to leadership, which boosted my confidence and business acumen significantly.",
    name: "Linesh, Malaysia",
    role: "Finance Ops Associate",
  },
  {
    quote:
      "Exploring ESG, impact investing, and business development with EDGE made it far more valuable than a typical internship, and helped grow both my leadership and network.",
    name: "Baljit, France",
    role: "Graduate Student in International Trade",
  },
  {
    quote:
      "EDGE expands your mindset and helps you take concrete steps toward becoming a purpose-driven leader.",
    name: "Maria, Spain",
    role: "Global Clinical Program Lead",
  },
  {
    quote:
      "If you are a fast learner, problem-solver, or passionate changemaker ready to take on challenges and apply your skills, this is the perfect opportunity for you.",
    name: "Mario, Mexico",
    role: "Sales & Finance Executive",
  },
];

const TestimonialsTalent: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-black">
            Participant <span className="text-primary-blue">Voices</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Hear from alumni who’ve gained practical experience, built their
            network, and launched purpose-driven careers through EDGE.
          </p>
        </header>

        {/* Horizontal Scrolling */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[350px] max-w-sm bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between"
              >
                <p className="text-neutral-700 italic">“{t.quote}”</p>
                <div className="mt-4">
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: calc(350px * ${testimonials.length * 2} + 2rem * ${testimonials.length * 2});
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsTalent;