import React, { useState } from 'react';

const Structure: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const curriculumItems = [
    {
      title: "Global Business Strategies",
      description: "Learn to develop and implement business strategies that work across different markets and cultures."
    },
    {
      title: "International Marketing and Sales",
      description: "Master techniques for marketing products and services globally, understanding regional differences and consumer behaviors."
    },
    {
      title: "Cross-Cultural Communication",
      description: "Develop skills to effectively communicate and collaborate with teams and stakeholders from diverse cultural backgrounds."
    },
    {
      title: "Financial Analysis and Investment",
      description: "Understand financial markets, investment strategies, and economic principles in a global context."
    },
    {
      title: "Technology and Innovation",
      description: "Explore how technology drives business innovation and transformation across international markets."
    },
    {
      title: "ESG Principles and Practices",
      description: "Learn how environmental, social, and governance factors impact business decisions and sustainable growth."
    },
    {
      title: "Leadership Development",
      description: "Build skills to lead diverse teams effectively and navigate complex international business environments."
    },
    {
      title: "Project Management",
      description: "Master methodologies for managing complex projects across different time zones, cultures, and business contexts."
    },
    {
      title: "Career Development and Networking",
      description: "Develop strategies for building a global professional network and advancing your international career."
    }
  ];

  return (
    <div id="structure" className="relative py-20">
      {/* Background accent */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-16 top-1/4 h-80 w-80 rounded-full bg-[#36B1CF]/5 blur-3xl transform -rotate-12"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#BFE2EB]/10 blur-3xl transform rotate-6"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
        <span className="mb-2 inline-block rounded-full bg-[#BFE2EB]/30 px-3 py-1 text-sm font-semibold text-[#36B1CF]">
            What We Offer
          </span>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text">
            Program Structure
          </h3>
          <div className="mt-4 h-1 w-20 bg-[#36B1CF] mx-auto rounded-full transform transition-all duration-300 hover:scale-110"></div>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our carefully designed 3-month program combines intensive learning with hands-on experience
          </p>
        </div>
        
        {/* Improved Timeline section */}
        <div className="relative mx-auto mb-20 max-w-3xl">
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-[#36B1CF] to-[#BFE2EB] transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {/* Week 1 */}
            <div className="relative flex items-start">
              <div className="flex w-full">
                <div className="w-1/2 pr-8">
                  <div className="flex justify-end">
                    <div className="inline-block rounded-xl bg-[#36B1CF] px-4 py-2 text-sm font-semibold text-white shadow-md transform transition-all duration-300 hover:scale-105">
                      Week 1
                    </div>
                  </div>
                  <h4 className="mt-3 text-xl font-bold text-gray-900 text-right">Masterclasses</h4>
                  <p className="mt-2 text-gray-600 text-right leading-relaxed">
                    Intensive online sessions covering key global business topics led by industry experts and senior leaders.
                  </p>
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute left-0 top-6 h-6 w-6 rounded-full border-4 border-white bg-[#36B1CF] shadow-lg transform -translate-x-1/2 transition-all duration-300 hover:scale-125"></div>
                </div>
              </div>
            </div>
            
            {/* Weeks 2-12 */}
            <div className="relative flex items-start">
              <div className="flex w-full">
                <div className="w-1/2 relative">
                  <div className="absolute right-0 top-6 h-6 w-6 rounded-full border-4 border-white bg-[#36B1CF] shadow-lg transform translate-x-1/2 transition-all duration-300 hover:scale-125"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="flex justify-start">
                    <div className="inline-block rounded-xl bg-[#36B1CF] px-4 py-2 text-sm font-semibold text-white shadow-md transform transition-all duration-300 hover:scale-105">
                      Weeks 2-12
                    </div>
                  </div>
                  <h4 className="mt-3 text-xl font-bold text-gray-900">On the Ground Experience</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Work on real projects with Digeto or our portfolio startups, guided by experienced mentors throughout your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modernized Curriculum accordion */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-1 shadow-xl border border-gray-100/50 backdrop-blur-sm">
          <div className="rounded-t-2xl bg-[#36B1CF]/5 p-6 border-b border-gray-100/50">
            <h4 className="flex items-center text-xl font-bold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 h-6 w-6 text-[#36B1CF] transition-transform duration-300 group-hover:rotate-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              Curriculum
            </h4>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Our comprehensive curriculum is designed to equip you with the knowledge and skills needed for global business success.
            </p>
          </div>
          
          <div className="divide-y divide-gray-100/50">
            {curriculumItems.map((item, index) => (
              <div key={index} className="group cursor-pointer transition-all duration-300 hover:bg-gray-50/50">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-gray-900 transition-colors group-hover:text-[#36B1CF]">{item.title}</span>
                  <span className="ml-6 flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                    {activeAccordion === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-[#36B1CF]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-[#36B1CF]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>
                
                {activeAccordion === index && (
                  <div className="px-6 py-4 bg-gradient-to-r from-gray-50/50 to-transparent">
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;