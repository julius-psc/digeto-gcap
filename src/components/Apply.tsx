import React, { useState } from 'react';

const Apply: React.FC = () => {
  const [formSubmitted] = useState<boolean>(false);
  const [, setIsHovered] = useState<boolean>(false);

  return (
    <div id="apply" className="relative bg-gray-50 py-20">
      {/* Background accent */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-[#36B1CF]/5 blur-3xl transform rotate-12"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#BFE2EB]/10 blur-3xl transform -rotate-6"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="mb-2 inline-block rounded-full bg-[#BFE2EB]/30 px-3 py-1 text-sm font-semibold text-[#36B1CF]">
            Join Our Program
          </span>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text">
            How to Apply
          </h3>
          <div className="mt-4 h-1 w-20 bg-[#36B1CF] mx-auto rounded-full transform transition-all duration-300 hover:scale-110"></div>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Ready to kickstart your global career? Follow these simple steps to join our next cohort.
          </p>
        </div>

        {/* Application Steps */}
        <div className="mx-auto mb-16 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#BFE2EB]/50">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BFE2EB]/30 text-[#36B1CF] transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold text-gray-900">Submit CV</h4>
              <p className="text-center text-gray-600">
                Send your CV via LinkedIn job opportunities or email us at contact@digeto.com
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#BFE2EB]/50">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BFE2EB]/30 text-[#36B1CF] transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold text-gray-900">Interview</h4>
              <p className="text-center text-gray-600">
                Selected candidates will be contacted for an interview to discuss fit and expectations
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#BFE2EB]/50">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BFE2EB]/30 text-[#36B1CF] transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-center text-lg font-bold text-gray-900">Get Selected</h4>
              <p className="text-center text-gray-600">
                Successful applicants will receive an offer to join our next cohort
              </p>
            </div>
          </div>
        </div>

        {/* Harmonious Important Details Section */}
        <div className="mx-auto max-w-3xl">
          <div className="group relative rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#BFE2EB]/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block mb-3 rounded-full bg-[#BFE2EB]/30 px-3 py-1 text-sm font-semibold text-[#36B1CF]">
                  Important Dates
                </span>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Next Cohort: June 2025</h4>
                <p className="text-red-600 font-medium">Deadline: April 30, 2025</p>
              </div>
              <a target="_blank" href="https://www.jotform.com/form/250922808027052#preview">
                <button
                  className="w-full md:w-auto bg-[#36B1CF] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#2E9BB5] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#36B1CF]/50 focus:ring-offset-2 transform hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Apply Now
                </button>
              </a>
            </div>
            {formSubmitted && (
              <div className="mt-4 bg-[#BFE2EB]/20 p-3 rounded-lg text-center">
                <p className="text-[#36B1CF] font-medium text-sm">
                  Application submitted successfully! We'll be in touch soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;