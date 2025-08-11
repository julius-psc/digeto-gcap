import React from "react";
import {
  IconTargetArrow,
  IconEye,
  IconNetwork,
  IconCurrencyDollar,
  IconBriefcase,
  IconSettings,
  IconRocket,
} from "@tabler/icons-react";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">{children}</div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 pt-40">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight text-black leading-none">
            About <span className="text-primary-blue">EDGE</span>
          </h2>
          <p className="mt-2 text-2xl lg:text-3xl font-light text-neutral-700">by DIGETO</p>
          <p className="mt-8 text-xl leading-relaxed text-neutral-800">
            DIGETO is a <span className="text-primary-blue font-semibold">global impact ecosystem</span> connecting
            impact-driven startups with strategic investors—while equipping future talent with
            real-world skills in sustainability, innovation, and global scaling. EDGE is our talent
            initiative: a <span className="font-semibold">hands-on accelerator</span> where fellows learn by doing,
            working directly with purpose-driven startups and global mentors.
          </p>
        </header>

        {/* Mission / Vision / Network */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <div className="flex items-start gap-3">
              <IconTargetArrow size={28} />
              <h3 className="text-xl font-semibold">Mission</h3>
            </div>
            <p className="mt-3 text-neutral-700">
              Amplify the impact of purpose-driven organisations by providing the resources and networks necessary for
              global scaling.
            </p>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <IconEye size={28} />
              <h3 className="text-xl font-semibold">Vision</h3>
            </div>
            <p className="mt-3 text-neutral-700">
              A global ecosystem where impactful solutions reach every corner of the world, fostering a more
              sustainable future.
            </p>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <IconNetwork size={28} />
              <h3 className="text-xl font-semibold">Our Network</h3>
            </div>
            <ul className="mt-3 space-y-2 text-neutral-700 list-disc pl-5">
              <li>500 Angel Investors</li>
              <li>100+ VCs & Institutional Funds</li>
              <li>50+ CXOs & Industry Experts</li>
              <li>Presence across 15+ countries</li>
            </ul>
          </Card>
        </div>

        {/* Services */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-black">Our Services</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="flex items-start gap-3">
                <IconCurrencyDollar size={26} />
                <h4 className="text-lg font-semibold">Fundraising</h4>
              </div>
              <p className="mt-2 text-neutral-700">
                AI-assisted matching connects you with the right investors.
              </p>
            </Card>

            <Card>
              <div className="flex items-start gap-3">
                <IconBriefcase size={26} />
                <h4 className="text-lg font-semibold">Business Opportunities</h4>
              </div>
              <p className="mt-2 text-neutral-700">
                Meet potential partners and unlock strategic collaborations.
              </p>
            </Card>

            <Card>
              <div className="flex items-start gap-3">
                <IconSettings size={26} />
                <h4 className="text-lg font-semibold">Operational Support</h4>
              </div>
              <p className="mt-2 text-neutral-700">
                Access experts in HR, Legal, Finance, Supply Chain, Marketing, and ESG.
              </p>
            </Card>

            <Card>
              <div className="flex items-start gap-3">
                <IconRocket size={26} />
                <h4 className="text-lg font-semibold">Accelerator Program</h4>
              </div>
              <p className="mt-2 text-neutral-700">
                Intensive 3-month program to build the next generation of global impact leaders.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;