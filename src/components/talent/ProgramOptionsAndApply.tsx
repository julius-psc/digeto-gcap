import React from "react";
import { IconCheck, IconMail, IconArrowRight } from "@tabler/icons-react";

const rows = [
  { label: "Program Period", p1: "3 months", p2: "1 month", type: "text" },
  { label: "Masterclass Sessions", p1: true, p2: true },
  { label: "Mentoring & Coaching", p1: true, p2: true },
  { label: "Group Projects", p1: true, p2: false },
  { label: "One-month Internship", p1: true, p2: false },
  { label: "Digeto Email Account", p1: true, p2: false },
  { label: "Lifetime Community Access", p1: true, p2: true },
  { label: "Leadership Program Certificate", p1: true, p2: false },
  { label: "Access to Internship and Job Opportunities", p1: true, p2: true },
  { label: "Profit-sharing Agreement", p1: true, p2: false },
  { label: "Program Fee", p1: "€500", p2: "€150", type: "text" },
];

const ProgramOptionsAndApply: React.FC = () => {
  return (
    <section id="fees" className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h2 className="text-5xl font-extrabold text-black">
            Program <span className="text-primary-blue">Options</span>
          </h2>
          <p className="mt-3 text-lg text-neutral-700 max-w-3xl">
            Choose the path that fits your goals—go for the full accelerator experience
            or take a flexible fast track into the global impact community.
          </p>
        </header>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-primary-blue/10">
              <tr className="text-sm text-neutral-700">
                <th className="px-5 py-4 font-semibold w-[40%]">Feature</th>
                <th className="px-5 py-4 font-semibold">
                  Package 1 <span className="font-bold text-primary-blue">€500</span> — Accelerator (3 months)
                </th>
                <th className="px-5 py-4 font-semibold">
                  Package 2 <span className="font-bold text-primary-blue">€150</span> — Accelerator (1 month)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-neutral-50/60" : "bg-white"}>
                  <td className="px-5 py-4 text-[15px] font-medium text-black align-middle">
                    {r.label}
                  </td>
                  <td className="px-5 py-4 align-middle">
                    {typeof r.p1 === "boolean" ? (
                      r.p1 ? (
                        <IconCheck className="text-primary-blue" size={22} aria-label="Included" />
                      ) : (
                        <span className="text-neutral-400">—</span>
                      )
                    ) : (
                      <span className="text-black font-semibold">{r.p1}</span>
                    )}
                  </td>
                  <td className="px-5 py-4 align-middle">
                    {typeof r.p2 === "boolean" ? (
                      r.p2 ? (
                        <IconCheck className="text-primary-blue" size={22} aria-label="Included" />
                      ) : (
                        <span className="text-neutral-400">—</span>
                      )
                    ) : (
                      <span className="text-black font-semibold">{r.p2}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to apply */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <h3 className="text-3xl font-bold text-black">How to Apply</h3>
            <p className="mt-2 text-neutral-700">
              <span className="font-semibold">Spaces are limited</span> and the application window closes soon.
              Don’t miss your chance to join a program that can redefine your career.
            </p>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-neutral-800">
                <li>
                  <span className="font-semibold">Format:</span> Fully remote — participate from anywhere in the world.
                </li>
                <li>
                  <span className="font-semibold">Application Process:</span> Send your CV via LinkedIn job opportunities
                  or email. If selected, attend a single interview.
                </li>
                <li>
                  <span className="font-semibold">Support:</span> Mentoring, masterclasses, and access to internships & job opportunities.
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-gradient-to-br from-primary-blue to-cyan-500 p-6 text-white shadow-md">
              <p className="text-sm opacity-90">Ready to apply?</p>
              <p className="text-2xl font-extrabold leading-tight mt-1">Join EDGE</p>
              <p className="mt-2 text-white/90">Submit your application or email us your CV.</p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:edge@digeto.com?subject=EDGE%20Application"
                  className="flex items-center justify-center gap-2 rounded-full bg-white text-primary-blue px-5 py-3 font-semibold hover:bg-white/90 transition"
                >
                  <IconMail size={18} />
                  Email your CV
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.jotform.com/form/250922808027052#preview"
                  className="flex items-center justify-center gap-2 rounded-full bg-black/10 text-white px-5 py-3 font-semibold backdrop-blur hover:bg-black/20 transition"
                >
                  Start Application
                  <IconArrowRight size={18} />
                </a>
              </div>

              <p className="mt-4 text-xs text-white/80">
                You’ll receive a confirmation and next steps after submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOptionsAndApply;