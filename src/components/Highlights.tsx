import React from 'react';
import { 
  Monitor, 
  GraduationCap, 
  Briefcase, 
  LayoutGrid, 
  Users, 
  Leaf, 
  ShieldCheck, 
  Globe, 
  Star, 
  Calendar 
} from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      title: "Immersive Online Experience",
      description: "Participate part-time or full-time from anywhere.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Expert-Led Masterclasses",
      description: "Learn from senior leaders in Week 1.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Real-World Experience",
      description: "Work on hands-on projects with Digeto or impact startups.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Diverse Fields",
      description: "Explore Investment, Marketing, Sales, Tech, and more.",
      icon: <LayoutGrid className="w-6 h-6" />
    },
    {
      title: "Global Networking",
      description: "Connect with professionals and mentors worldwide.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Leadership & ESG Focus",
      description: "Build skills for responsible leadership.",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Career Support",
      description: "Personalized guidance during and after the program.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "International Experience",
      description: "Add valuable experience to your CV/Linkedin.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Certificate of Completion",
      description: "Validate your achievements.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Flexible Extension",
      description: "Extend up to 4 quarters.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <div id="highlights" className="relative py-20 overflow-x-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#36B1CF]/5 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-[#BFE2EB]/10 blur-2xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="mb-2 inline-block rounded-full bg-[#BFE2EB]/30 px-3 py-1 text-sm font-semibold text-[#36B1CF]">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Program Highlights
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to accelerate your global career journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[100%]">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] w-full"
            >
              <div className="absolute right-6 top-6 text-[#BFE2EB] opacity-20 group-hover:opacity-30 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12">
                  <path d="M9.307 16.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L6.5 18.086V10a1 1 0 0 1 2 0v8.086l1.793-1.793zm13-8.586a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.086 9H11a1 1 0 1 1 0-2h8.086l-1.793-1.793a1 1 0 0 1 1.414-1.414l3 3z" />
                </svg>
              </div>
              
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#36B1CF]/10 text-[#36B1CF]">
                {highlight.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900">{highlight.title}</h3>
              <p className="mt-2 text-gray-600">{highlight.description}</p>
              
              <div className="mt-6 h-1 w-10 rounded-full bg-[#36B1CF]/30 group-hover:bg-[#36B1CF] transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;