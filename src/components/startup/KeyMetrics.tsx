import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

type Metric = { label: string; value: string; sub?: string };
type Props = {
  metrics?: Metric[];
  sectors?: string[];
};

const defaultMetrics: Metric[] = [
  { label: "Total Amount Funded", value: "€18M+", sub: "Cumulative capital facilitated" },
  { label: "Startups Supported", value: "89", sub: "Across multiple sectors" },
  { label: "International Projects", value: "47" },
];

const defaultSectors = [
  "CleanTech",
  "FoodTech",
  "ConsumerTech",
  "AgriTech",
  "HealthTech",
  "EdTech",
];

const KeyMetrics: React.FC<Props> = ({ metrics = defaultMetrics, sectors = defaultSectors }) => {
  return (
    <section id="key-metrics" className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-black">
            Key Metrics
          </h2>
          <p className="mt-1 text-2xl font-light text-neutral-800">The Impact We Create</p>
          <div className="mt-5 h-1 w-28 rounded-full bg-neutral-200" />
        </header>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: metric list */}
          <div className="lg:col-span-7 space-y-6">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-start gap-4">
                <IconCircleCheckFilled className="shrink-0 text-primary-blue" size={28} />
                <div>
                  <p className="text-lg font-semibold text-black">{m.label}</p>
                  <p className="text-3xl font-extrabold text-primary-blue leading-tight">{m.value}</p>
                  {m.sub && <p className="text-sm text-neutral-600 mt-1">{m.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Right: sectors pill card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-black">Key Sectors</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-neutral-800">
                {sectors.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;