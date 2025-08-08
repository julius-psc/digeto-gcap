import React from "react";

import deepak from "../assets/team/deepak.png";
import diogo from "../assets/team/diogo.png";
import gregor from "../assets/team/gregor.png";
import khushi from "../assets/team/khushi.png";
import luis from "../assets/team/luis.png";
import nandini from "../assets/team/nandini.png";
import nikhil from "../assets/team/nikhil.png";
import olivia from "../assets/team/olivia.png";
import steven from "../assets/team/steven.png";

type Member = {
  name: string;
  role: string;
  description: string;
  img: string;
};

const team: Member[] = [
  {
    name: "Deepak Peschard",
    role: "CEO & Founder of Digeto",
    description:
      "20+ years managing multicultural teams across the world in the banking, VC and startup industry.",
    img: deepak,
  },
  {
    name: "Luís Guilherme Diniz",
    role: "Director & Head of Edge",
    description:
      "25+ years helping founders expand globally through tech-driven, customer-focused strategies.",
    img: luis,
  },
  {
    name: "Nikhil P C",
    role: "Head of Marketing & India Operations",
    description:
      "9+ years in global growth, brand strategy, sales, and impact-driven initiatives.",
    img: nikhil,
  },
  {
    name: "Diogo Saraiva",
    role: "Chief Technology Officer",
    description:
      "10+ years of driving digital transformation through end-to-end project leadership and scalable tech solutions.",
    img: diogo,
  },
  {
    name: "Nandini S Menon",
    role: "People & Office Manager",
    description:
      "9+ years in digital marketing with experience in team and office management.",
    img: nandini,
  },
  {
    name: "Khushi Bhartiya",
    role: "Venture Lead",
    description:
      "3+ years of experience in financial analysis, investor relations, and deal management across early to growth-stage ventures.",
    img: khushi,
  },
];

const board: Member[] = [
  {
    name: "Olivia Calvet-Soubiran",
    role: "International Business Advisor",
    description:
      "30+ years in international trade, guiding business expansion between Europe and Asia.",
    img: olivia,
  },
  {
    name: "Steven Paul",
    role: "Startup expert & Strategic Advisor",
    description:
      "25+ years in governance, board leadership, and global business transformation across 30+ markets.",
    img: steven,
  },
  {
    name: "Gregor Aschoff",
    role: "ESG expert & Strategic Advisor",
    description:
      "25+ years leading global growth and operational transformation across tech-driven businesses.",
    img: gregor,
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-4xl mb-12">
          <h2 className="text-primary-blue text-5xl font-extrabold">
            The Team
          </h2>
          <p className="text-2xl font-light text-neutral-800">
            Behind EDGE
          </p>
          <p className="mt-4 text-neutral-700">
            Led by seasoned professionals across industries and continents, the EDGE team brings decades of real-world expertise.
          </p>
        </header>

        {/* Team members */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-primary-blue shadow-sm"
              />
              <h3 className="mt-4 text-lg font-bold text-primary-blue">{member.name}</h3>
              <p className="text-sm font-semibold text-neutral-800">{member.role}</p>
              <p className="mt-2 text-sm text-neutral-600">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Board members */}
        <div className="mt-20">
          <h3 className="text-primary-blue text-3xl font-extrabold mb-8">
            Board Members
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-primary-blue shadow-sm"
                />
                <h4 className="mt-4 text-lg font-bold text-primary-blue">{member.name}</h4>
                <p className="text-sm font-semibold text-neutral-800">{member.role}</p>
                <p className="mt-2 text-sm text-neutral-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;